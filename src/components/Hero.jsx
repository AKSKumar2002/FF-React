import React, { useState, useEffect, useRef } from "react";
import heroVideo from "../assets/videos/hero-bg.mp4";
import heroImg from "../assets/images/hero-img.jpeg"; // your image file
import "./HeroForm.css"; // new CSS for flip/glass effects

export default function Hero({ useVideoBg = true }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "FiberFlow";
  const typingSpeed = 150;
  const pauseDuration = 3000;

  // Add state to toggle between Home and Business forms
  const [isBusiness, setIsBusiness] = useState(false);

  // Add state for popup
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    let pauseTimeout;

    const startTyping = () => {
      currentIndex = 0;
      setTypedText("");
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          pauseTimeout = setTimeout(() => {
            startTyping();
          }, pauseDuration);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  // Small submit handlers (replace with actual logic)
  const handleHomeSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("Home form submitted", Object.fromEntries(form.entries()));
  };

  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("Business form submitted", Object.fromEntries(form.entries()));
  };

  // Reusable form field markup (tiny helpers)
  const TextInput = ({ name, placeholder, type = "text", ...props }) => (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="input-field"
      {...props}
    />
  );

  // compute CSS vars so animation comes from button
  const openEnquire = () => {
    if (!btnRef.current || !popupRef.current) {
      setIsOpen(true);
      return;
    }
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;

    popupRef.current.style.setProperty("--fromX", `${centerX}px`);
    popupRef.current.style.setProperty("--fromY", `${centerY}px`);
    // ensure open state toggles and animation triggers
    setIsOpen(true);
  };

  const closeEnquire = () => {
    setIsOpen(false);
    // restore focus to button when closed
    btnRef.current?.focus();
  };

  // close on click outside or ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeEnquire();
    };
    const handlePointer = (e) => {
      if (!isOpen) return;
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        closeEnquire();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handlePointer);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handlePointer);
    };
  }, [isOpen]);

  return (
    <>
      <section className="relative h-screen w-full bg-black flex items-center">
        {/* Background: Video or Image */}
        {useVideoBg ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={heroImg}
            alt="Hero Background"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-5xl px-6 md:px-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Experience Lightning-Fast Internet with{" "}
            <span className="text-red-500 inline-block min-w-[280px] md:min-w-[400px]">
              {typedText}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Stream, game, and work with unmatched speed and reliability.
            Stay connected to what matters most.
          </p>
          <a
            href="/Plans"
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
          hover:bg-red-500 hover:text-white transition"
          >
            View Plans
          </a>
        </div>
      </section>

      {/* IMPORTANT: Remove or keep the page form section as you like.
        We moved the flip card into the popup. If you prefer to keep section visible
        replace with a smaller hero form CTA. */}

      {/* Floating Enquire Button */}
      <button
        ref={btnRef}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openEnquire}
        className="enquire-button"
      >
        <span className="enq-icon">✉</span>
        <span className="enq-label">Enquire</span>
      </button>

      {/* Overlay + Popup */}
      {isOpen && (
        <div className={`enquire-layer ${isOpen ? "open" : ""}`}>
          <div
            className="enquire-overlay"
            onClick={closeEnquire}
            aria-hidden="true"
          ></div>

          <div
            ref={popupRef}
            className={`enquire-popup ${isOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Enquire"
          >
            <button
              className="popup-close"
              onClick={closeEnquire}
              aria-label="Close popup"
            >
              ×
            </button>

            {/* Popup content: left = forms (Home/Business flip) right = WhatsApp */}
            <div className="enquire-inner">
              {/* Left: Flip card forms (reused existing forms) */}
              <div className="enquire-left">
                {/* Added: local popup tabs for left container only (Home/Business) */}
                <div className="popup-tabs" role="tablist" aria-label="Choose Form">
                  <button
                    className={`tab ${!isBusiness ? "active" : ""}`}
                    aria-pressed={!isBusiness}
                    onClick={() => setIsBusiness(false)}
                  >
                    HOME
                  </button>
                  <button
                    className={`tab ${isBusiness ? "active" : ""}`}
                    aria-pressed={isBusiness}
                    onClick={() => setIsBusiness(true)}
                  >
                    BUSINESS
                  </button>
                </div>

                {/* flip card */}
                <div className={`hero-flip-card ${isBusiness ? "is-flipped" : ""}`}>
                  <div className="hero-flip-face hero-card-front">
                    <form className="grid-forms" onSubmit={handleHomeSubmit}>
                      <div className="col-span-2">
                        <TextInput name="name" placeholder="Name" />
                      </div>
                      <div>
                        <TextInput name="email" placeholder="Email Id" type="email" />
                      </div>
                      <div>
                        <TextInput name="phone" placeholder="Phone Number" />
                      </div>

                      <div>
                        <TextInput name="date" placeholder="dd-mm-yyyy" />
                      </div>
                      <div>
                        <select name="dept" className="input-field">
                          <option>Sales/Support</option>
                          <option>Technical</option>
                          <option>Billing</option>
                        </select>
                      </div>
                      <div>
                        <TextInput name="address" placeholder="Address" />
                      </div>

                      <div className="col-span-2">
                        <textarea
                          name="extra"
                          placeholder="Additional Information"
                          className="input-field h-24"
                        />
                      </div>

                      <div className="captcha-box">
                        {/* placeholder for reCAPTCHA */}
                        <div className="recaptcha-placeholder">reCAPTCHA placeholder</div>
                      </div>

                      <div className="submit-col">
                        <button className="submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>

                  <div className="hero-flip-face hero-card-back" aria-hidden={!isBusiness}>
                    <form className="grid-forms" onSubmit={handleBusinessSubmit}>
                      <div className="col-span-2">
                        <TextInput name="company" placeholder="Business / Company Name" />
                      </div>
                      <div>
                        <TextInput name="cperson" placeholder="Contact Person" />
                      </div>
                      <div>
                        <TextInput name="bphone" placeholder="Phone Number" />
                      </div>

                      <div>
                        <TextInput name="bemail" placeholder="Business Email" type="email" />
                      </div>
                      <div>
                        <select name="btype" className="input-field">
                          <option>ISP</option>
                          <option>Corporate</option>
                          <option>Reseller</option>
                        </select>
                      </div>
                      <div>
                        <TextInput name="baddress" placeholder="Address" />
                      </div>

                      <div className="col-span-2">
                        <textarea
                          name="bextra"
                          placeholder="Additional Information"
                          className="input-field h-24"
                        />
                      </div>

                      <div className="captcha-box">
                        <div className="recaptcha-placeholder">reCAPTCHA placeholder</div>
                      </div>

                      <div className="submit-col">
                        <button className="submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right: WhatsApp call to action */}
              <div className="enquire-right">
                <a
                  className="whatsapp-cta"
                  href="https://wa.me/1234567890?text=Hello%20I%20want%20to%20enquire"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  {/* inline simple svg icon */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 3a3 3 0 0 0-3-3H6A3 3 0 0 0 3 3v13a3 3 0 0 0 3 3h1v4l4-4h8a3 3 0 0 0 3-3V3z"
                      fill="#25D366"
                    />
                    <path
                      d="M17 12.5c-.3-.2-1.9-1.1-2.3-1.2-.3-.1-.5-.1-.7.2-.2.3-.8 1.2-.9 1.4-.2.4-.4.5-.7.3-1.1-.6-2-1.6-2.8-2.8-.9-1.5-.6-2.5.5-3.3.4-.3.4-.4.3-.6-.1-.1-.6-1-.8-1.4-.2-.5-.4-.4-.7-.4-.3 0-.6 0-.9.6-.3.6-1.1 2.3 1.1 5.6 1.6 2.2 3.3 3 5.2 3.8 1.4.6 2.4.5 3.3.3.5-.1 1.9-.8 2.1-1.6.1-.6.1-1.2-.4-1.8-.5-.6-1.6-1.3-1.9-1.5z"
                      fill="#fff"
                    />
                  </svg>
                  <div className="wh-text">Chat on WhatsApp</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
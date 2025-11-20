import React, { useState, useRef, useEffect } from "react";
import "./HeroForm.css";

export default function EnquireButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const btnRef = useRef(null);
  const popupRef = useRef(null);

  // ...copy the open/close logic, form handlers, TextInput, etc. from Hero.jsx...

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

  const TextInput = ({ name, placeholder, type = "text", ...props }) => (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="input-field"
      {...props}
    />
  );

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
    setIsOpen(true);
  };

  const closeEnquire = () => {
    setIsOpen(false);
    btnRef.current?.focus();
  };

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
      <button
        ref={btnRef}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openEnquire}
        className="enquire-button"
        style={{ zIndex: 9999, position: "fixed" }} // ensure always on top
      >
        <span className="enq-icon">✉</span>
        <span className="enq-label">Enquire</span>
      </button>
      {isOpen && (
        <div className={`enquire-layer ${isOpen ? "open" : ""}`} style={{ zIndex: 9998 }}>
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
            <div className="enquire-inner">
              <div className="enquire-left">
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
                <div className={`hero-flip-card ${isBusiness ? "is-flipped" : ""}`}>
                  <div className="hero-flip-face hero-card-front">
                    <form className="grid-forms" onSubmit={handleHomeSubmit}>
                      {/* ...form fields as in Hero.jsx... */}
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
                      <div>
                        <textarea
                          name="query"
                          placeholder="Query"
                          className="input-field h-16"
                        />
                      </div>
                      <div className="submit-col">
                        <button className="submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className="hero-flip-face hero-card-back" aria-hidden={!isBusiness}>
                    <form className="grid-forms" onSubmit={handleBusinessSubmit}>
                      {/* ...business form fields as in Hero.jsx... */}
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
                      <div>
                        <textarea
                          name="bquery"
                          placeholder="Query"
                          className="input-field h-16"
                        />
                      </div>
                      <div className="submit-col">
                        <button className="submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="enquire-right">
                <a
                  className="whatsapp-cta"
                  href="https://wa.me/1234567890?text=Hello%20I%20want%20to%20enquire"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
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

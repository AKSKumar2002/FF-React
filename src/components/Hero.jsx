import React, { useState, useEffect, useRef } from "react";
import heroVideo from "../assets/videos/hero-bgk.mp4";
import heroImg from "../assets/images/hero-img.jpeg"; // your image file
import "./HeroForm.css"; // new CSS for flip/glass effects

export default function Hero({ useVideoBg = true }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "FiberFlow";
  const typingSpeed = 150;
  const pauseDuration = 3000;

  // Add state to toggle between Home and Business forms
  const [isBusiness, setIsBusiness] = useState(false);

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
            preload="auto"
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
    </>
  );
}
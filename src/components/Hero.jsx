import React, { useState, useEffect } from "react";
import heroVideo from "../assets/videos/hero-bg.mp4";
import heroImg from "../assets/images/hero-img.jpeg"; // your image file

export default function Hero({ useVideoBg = true }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "FiberFlow";
  const typingSpeed = 150;
  const pauseDuration = 3000;

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

  return (
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
      <div className="absolute inset-0 bg-black/60"></div>

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
  );
}
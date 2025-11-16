import React from "react";
import bgVideo from "../assets/videos/wifi-bg.mp4"; // Make sure this exists

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Experience Lightning-Fast Internet with <span className="text-red-500">FiberFlow</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Stream, game, and work with unmatched speed and reliability. Stay connected to what matters most.
        </p>
        <a
          href="#plans"
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
        >
          View Plans
        </a>
      </div>
    </section>
  );
}

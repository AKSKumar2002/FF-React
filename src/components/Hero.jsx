import React from "react";
import heroBg from "../assets/images/hero-img.jpeg"; // your full-screen background image

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Experience Lightning-Fast Internet with{" "}
          <span className="text-red-500">FiberFlow</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Stream, game, and work with unmatched speed and reliability.
          Stay connected to what matters most.
        </p>

        <a
  href="/Plans"
  className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
  hover:bg-red-500 hover:text-white transition"
>
  View Plans
</a>

      </div>
    </section>
  );
}

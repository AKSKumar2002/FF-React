import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Wifi, Zap, ShieldCheck, Globe, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import welcomeImg from "../assets/images/welcome.jpg";
import netImg from "../assets/images/net.jpg";
import contactBg from "../assets/images/contact1.jpg"; // <-- add this import

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-24 scroll-mt-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={welcomeImg}
              alt="FiberFlow Internet"
              className="rounded-xl shadow-lg object-cover"
              style={{ width: "500px", height: "550px" }}
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="text-left">

            {/* LABEL BADGE */}
            <div
              className="
                inline-flex items-center gap-2 px-5 py-2
                rounded-full border border-red-500/40
                bg-red-500/5 text-red-400
                shadow-[0_0_12px_rgba(255,0,0,0.25)]
                backdrop-red-md mb-5
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12h4l2-7 4 14 2-7h6"
                />
              </svg>

              <span className="text-sm font-medium">
                High-Speed Internet Partner
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-red-500">FiberFlow</span> Internet
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              FiberFlow delivers next-generation fiber-optic internet built for speed,
              stability, and reliability. Experience seamless streaming, smooth browsing,
              and crystal-clear video calls—all powered by ultra-fast fiber technology.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Whether you work from home, play competitive games, or run multiple smart
              devices, FiberFlow ensures ultra-low latency, uninterrupted connectivity,
              and high-performance internet for your modern digital lifestyle.
            </p>

            {/* CTA Button */}
            <Link
              to="/about"
              className="px-6 py-3 bg-white hover:bg-red-600 text-black hover:text-white font-medium rounded-full transition"
            >
              Know more
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        className="py-24 scroll-mt-20 px-6 md:px-16"
        style={{ backgroundColor: "#0d0d0dff" }}
      >
        {/* Main Heading */}
        <h3 className="text-center text-4xl font-bold mb-4 text-white">
          Why Choose <span className="text-red-500">FiberFlow</span>?
        </h3>

        {/* Sub-heading */}
        <p className="text-center text-gray-400 text-lg mb-16">
          Experience unmatched internet performance built for the modern digital world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              icon: <Wifi className="w-12 h-12 text-red-500" />,
              title: "High-Speed Fiber Internet",
              desc: "Experience blazing-fast speeds with our latest fiber-optic network.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
              title: "99.9% Uptime",
              desc: "Stay connected without interruptions — reliable connectivity anytime.",
            },
            {
              icon: <Zap className="w-12 h-12 text-red-500" />,
              title: "Low Latency",
              desc: "Perfect for gamers, streamers, and remote workers needing real-time response.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-300 rounded-2xl shadow-md"
            >
              <div className="mb-6">{item.icon}</div>
              <h4 className="text-2xl font-semibold mb-2 text-black">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="py-24 scroll-mt-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="text-left">

            {/* LABEL BADGE */}
            <div
              className="
                inline-flex items-center gap-2 px-5 py-2
                rounded-full border border-red-500/40
                bg-red-500/5 text-red-400
                shadow-[0_0_12px_rgba(255,0,0,0.25)]
                backdrop-red-md mb-5
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12h4l2-7 4 14 2-7h6"
                />
              </svg>

              <span className="text-sm font-medium">
                Nationwide Coverage
              </span>
            </div>

            <h3 className="text-4xl font-bold mb-6">
              Wide Network <span className="text-red-500">Coverage</span>
            </h3>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Our service network spans across major regions, ensuring reliable,
              high-performance connectivity wherever you are.
            </p>

            <ul className="text-lg space-y-3 text-gray-300">
              <li className="flex items-center gap-4">
                <Globe className="w-6 h-8 text-red-500" />
                Fast-growing coverage across multiple cities
              </li>

              <li className="flex items-center gap-4">
                <Users className="w-6 h-6 text-red-500" />
                Trusted by thousands of users
              </li>

              <li className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-red-500" />
                Secure & protected network infrastructure
              </li>
            </ul>

            {/* BUTTON */}
            <Link
              to="/coverage"
              className="mt-6 inline-block px-6 py-3 bg-white text-black hover:bg-red-600 hover:text-white font-medium rounded-full transition"
            >
              Check Coverage
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src={netImg}
              alt="Coverage Area"
              className="rounded-xl shadow-lg object-cover border-none outline-none ring-0"
              style={{ width: "500px", height: "550px" }}
            />
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
<section
  className="relative py-24 scroll-mt-20 text-center px-6 bg-black"
  style={{
    backgroundImage: `url(${contactBg})`, // <-- use imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-4xl font-bold mb-4">Need Help or Have Questions?</h3>
    <p className="text-gray-300 mb-8">
      Our customer support team is available 24/7 to assist you.
    </p>

    <a
      href="/contact"
      className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full text-lg font-semibold transition"
    >
      Contact Us
    </a>
  </div>
</section>


      <Footer />
    </div>
  );
}

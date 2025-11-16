import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Wifi, Zap, ShieldCheck, Globe, Users, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white font-space">
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to FiberFlow Internet</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            FiberFlow provides ultra-fast fiber-optic internet services designed to keep you 
            connected always. Whether you stream, work, browse, or game — we deliver unmatched 
            stability, performance, and lightning-fast connectivity that your modern lifestyle deserves.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gradient-to-b from-black via-[#080808] to-black px-6 md:px-16">
        <h3 className="text-center text-4xl font-bold mb-16">Why Choose FiberFlow?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Box */}
          {[
            {
              icon: <Wifi className="w-12 h-12 text-red-400" />,
              title: "High-Speed Fiber Internet",
              desc: "Experience blazing-fast speeds with our latest fiber-optic network.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-red-400" />,
              title: "99.9% Uptime",
              desc: "Stay connected without interruptions — reliable connectivity anytime.",
            },
            {
              icon: <Zap className="w-12 h-12 text-red-400" />,
              title: "Low Latency",
              desc: "Perfect for gamers, streamers, and remote workers needing real-time response.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 backdrop-red-xl bg-white/5 border border-white/10 rounded-2xl 
              hover:bg-white/10 hover:border-red-500/50 transition-all shadow-lg"
            >
              <div className="mb-6">{item.icon}</div>
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Wide Network Coverage</h3>
            <p className="text-gray-300 mb-6">
              Our service network spans across major regions, ensuring reliable, high-performance 
              connectivity wherever you are.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-red-400" /> Fast-growing coverage across multiple cities
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-6 h-6 text-red-400" /> Trusted by thousands of users
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-red-400" /> Secure & protected network infrastructure
              </li>
            </ul>
          </div>

          <div className="backdrop-red-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
            <img
              src="https://thumbs.dreamstime.com/b/global-network-connecting-world-map-red-glowing-dots-lines-symbolizing-communication-373740073.jpg"
              alt="FiberFlow coverage map"
              className="rounded-xl opacity-90"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0b0b0b] text-center px-6">
        <h3 className="text-4xl font-bold mb-4">Need Help or Have Questions?</h3>
        <p className="text-gray-300 mb-8">
          Our customer support team is available 24/7 to assist you.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full text-lg font-semibold transition"
        >
          <Phone className="w-6 h-6" /> Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

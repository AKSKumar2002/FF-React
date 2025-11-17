import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerImage from "../assets/images/about.jpg";

// Lucide React icons
import { Zap, DollarSign, Clock, Wifi, User, Lock } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-12 h-12 text-red-500" />,
    title: "Fast Installation",
    desc: "Get connected quickly with our easy setup process.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-red-500" />,
    title: "Cheap Pricing Plan",
    desc: "Affordable plans without compromising quality.",
  },
  {
    icon: <Clock className="w-12 h-12 text-red-500" />,
    title: "24/7 hr Support",
    desc: "Our team is always ready to help anytime.",
  },
  {
    icon: <Wifi className="w-12 h-12 text-red-500" />,
    title: "High-Speed WiFi",
    desc: "Enjoy blazing-fast fiber-optic internet speeds.",
  },
  {
    icon: <User className="w-12 h-12 text-red-500" />,
    title: "Customer Support",
    desc: "Friendly and reliable support for all customers.",
  },
  {
    icon: <Lock className="w-12 h-12 text-red-500" />,
    title: "Secure Connection",
    desc: "Stay safe online with our secure connections.",
  },
];

const faqs = [
  {
    q: "Which Wi-Fi is best for home?",
    a: "Fiberflow's fiber-optic Wi-Fi plans are ideal for home use, offering stable and high-speed connectivity.",
  },
  {
    q: "Which is the best broadband?",
    a: "Fiber broadband is the best due to its speed, reliability, and low latency—Fiberflow specializes in this.",
  },
  {
    q: "Which is the best internet service provider?",
    a: "Fiberflow is trusted by 2000+ users in Coimbatore for fast speeds, low downtime, and great customer service.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="relative min-h-screen text-white font-sans overflow-hidden">
      <Navbar />

      {/* Banner Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center z-10"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Company</h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Delivering high-speed fiber broadband with reliable service for over 5 years.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Content */}
        <div className="text-left space-y-4">
          {/* LABEL BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/5 text-red-400 shadow-[0_0_12px_rgba(255,0,0,0.25)] mb-5">
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
            <span className="text-sm font-medium">Professional Experience</span>
          </div>

          <h3 className="text-3xl font-bold">
            <span className="text-red-500">5+</span> Years Of Experience In Broadband{" "}
            <span className="text-red-500">Internet</span>
          </h3>
          <p className="text-[18px] text-gray-300">
  We are a leading Internet provider in Coimbatore and surrounding areas, delivering high-speed fiber broadband with reliable service.
</p>
<p className="text-[18px] text-gray-300">
  With over 2000+ happy customers, we solve network issues quickly and efficiently, ensuring uninterrupted connectivity for homes and businesses.
</p>
<ul className="space-y-2 mt-4 text-[18px] text-gray-300">
  <li className="flex items-center gap-2">
    <span className="text-red-500 text-lg">✔</span>
    <span>Advanced networking technology</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="text-red-500 text-lg">✔</span>
    <span>Highly qualified engineering team</span>
  </li>
</ul>

        </div>

        {/* Right Image */}
        <div>
          <img
            src={bannerImage}
            alt="fiber network"
            className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 z-10">
        <div className="text-center mb-16">
          {/* LABEL BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/5 text-red-400 shadow-[0_0_12px_rgba(255,0,0,0.25)] mb-5">
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
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold">
            Explore Why People <span className="text-red-500">Choose Our Service</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 shadow-xl transition hover:bg-white/10"
            >
              <div className="mb-4">{f.icon}</div>
              <h4 className="font-semibold text-xl mb-2">{f.title}</h4>
              <p className="text-gray-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 z-10">
        <div className="mb-16 text-left">
          {/* LABEL BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/5 text-red-400 shadow-[0_0_12px_rgba(255,0,0,0.25)] mb-5">
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
            <span className="text-sm font-medium">FiberFlow Support</span>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Frequently Asked<br />Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Box */}
          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-8">
                Can't find the answer you’re looking for? Send us an email and we’ll get back to you as soon as possible.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold text-center transition"
            >
              Send Email
            </a>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 cursor-pointer transition hover:bg-white/10"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-lg">{faq.q}</h4>
                  <span className="text-red-400 text-xl">{openIndex === index ? "▲" : "▼"}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-300 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}

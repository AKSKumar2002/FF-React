import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VoicePage() {
  const voiceSolutions = [
    { title: "Analog Intercom", desc: "Analog calling and paging intercom systems." },
    { title: "IP Intercom", desc: "IP-based intercom for modern communication." },
    { title: "Domestic SIP Trunk", desc: "SIP trunking for domestic call services." },
    { title: "Call Logs", desc: "Comprehensive call tracking and analytics." },
    { title: "Work From Home", desc: "Remote voice solutions for distributed teams." },
    { title: "IVR", desc: "Interactive Voice Response for automation." },
    { title: "Call Queue", desc: "Load balancing and queue management for calls." },
    { title: "Call Barging", desc: "Monitor and join calls for support or training." },
    { title: "Call Centre Solution", desc: "Complete call centre suite for enterprises." },
    { title: "Encrypted Calling", desc: "Secure, encrypted voice communication." },
    { title: "Voicemail", desc: "Advanced voicemail and message storage." },
    { title: "Live Monitoring", desc: "Real-time call monitoring and reporting." },
    { title: "SIP-P2P System", desc: "Peer-to-peer SIP voice connectivity." },
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#7b98b8] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
          alt="Voice Communication"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / VOICE</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Voice Solutions
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Transform your communication with custom-tailored enterprise voice solutions.
          </p>
        </div>
      </section>

      {/* Voice Solutions Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="Voice Studio"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Transform Your Communication With Custom-Tailored Voice Solutions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            FiberFlow delivers enterprise-grade voice solutions, including SIP trunking, intercom, IVR, call centre, and encrypted calling. Our systems are designed for reliability, scalability, and security, enabling seamless communication for businesses of any size.
          </p>
        </div>
      </section>

      {/* Voice Features Section */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          FiberFlow's Custom-Tailored Enterprise Communication Systems
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {voiceSolutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start border border-gray-200"
            >
              <div className="bg-blue-900 rounded-full p-3 mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-base mb-2 text-black">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

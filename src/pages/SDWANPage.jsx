import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SDWANPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
          alt="SD-WAN Modern"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / SD-WAN</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            SD-WAN (Software Defined WAN)
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Next-generation WAN for flexible, secure, and high-performance business connectivity.
          </p>
        </div>
      </section>

      {/* What is SD-WAN Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
            alt="SD-WAN Network"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 to-transparent"></div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            What Is SD-WAN?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            SD-WAN (Software Defined Wide Area Network) is a technology that simplifies the management and operation of a WAN by separating the networking hardware from its control mechanism. It enables businesses to securely connect multiple locations over the internet with optimal performance, flexibility, and cost savings. SD-WAN provides centralized control, hybrid connectivity, and secure access for modern enterprises.
          </p>
        </div>
      </section>

      {/* SD-WAN Features Section */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Exclusive Features Of FiberFlow Cloud-Based SD-WAN
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Centralized Control",
              desc: "Single cloud dashboard for network monitoring, analytics, and control.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            },
            {
              title: "Hybrid Connectivity",
              desc: "Use wired and wireless connections, mix private and public links, and scale as needed.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048957.png"
            },
            {
              title: "High-Speed Connectivity",
              desc: "Optimized routing and bandwidth allocation for seamless speed and low latency.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048962.png"
            },
            {
              title: "Plug-N-Play",
              desc: "Easy deployment with zero-touch setup, regardless of device or provider.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048965.png"
            },
            {
              title: "Secure Access",
              desc: "Unified firewall for secure connections to private cloud applications.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048967.png"
            },
            {
              title: "Multi-Cloud Ready",
              desc: "Seamless integration with multiple cloud providers and SaaS apps.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048970.png"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-center border border-white/10"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-base mb-2 text-white text-center">{item.title}</h3>
              <p className="text-gray-400 text-sm text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

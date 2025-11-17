import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function IllPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
          alt="Modern Network Data Center"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / ILL</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Dedicated Internet<br />Leased Line (ILL)
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Enterprise-grade, SLA-backed, high-speed fiber connectivity for your business.
          </p>
        </div>
      </section>

      {/* Reliable Leased Line Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Fiber Optic Cables Modern"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 to-transparent"></div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Reliable Leased Line For Business Performance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our ISP-grade leased line delivers 100% dedicated bandwidth, ultra-low latency, and robust security. Perfect for cloud, video conferencing, and mission-critical apps. Experience seamless, always-on connectivity with proactive monitoring and instant support.
          </p>
        </div>
      </section>

      {/* SLA Section */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#0d0d0d] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              SLA-Backed Reliability With ILL Connectivity
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Unlike regular broadband, our ILL comes with a written SLA, guaranteeing uptime, speed, and support. Your business is protected against downtime and gets priority engineering support, ensuring compliance and peace of mind.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Network Engineer Modern"
              className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
              style={{ maxHeight: "260px" }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Connectivity Solutions Section */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Reliable, Secure, And Optimized Connectivity Solutions
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Dedicated Bandwidth",
              desc: "1:1 uplink/downlink ratio for data-intensive business applications.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/activity.svg"
            },
            {
              title: "Secure",
              desc: "Built-in security with DDoS mitigation and encrypted links.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/shield.svg"
            },
            {
              title: "Route Optimization",
              desc: "Optimized routing for best latency across the globe.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/map.svg"
            },
            {
              title: "Service Assurance",
              desc: "Enterprise-grade SLA for higher uptime and reliability.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/check-circle.svg"
            },
            {
              title: "Dual Stack Support",
              desc: "IPv4 & IPv6 dual stack for hosting and cloud.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/layers.svg"
            },
            {
              title: "Direct Cloud Connectivity",
              desc: "Direct connections to major cloud providers for minimal hops.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cloud.svg"
            },
            {
              title: "Multi Path Last Mile",
              desc: "Redundant fiber/wireless paths for zero downtime.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/git-branch.svg"
            },
            {
              title: "24/7 Assisted Care",
              desc: "Proactive monitoring and instant remote/onsite support.",
              icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/headphones.svg"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-start border border-white/10"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4 invert" />
              <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

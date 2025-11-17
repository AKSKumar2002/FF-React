import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WifiDesignPage() {
  const wifiFeatures = [
    { title: "Coverage", desc: "Maximum coverage for seamless usage throughout your property.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { title: "Capacity", desc: "Support for high user density and multiple devices.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048957.png" },
    { title: "Optimization", desc: "Optimized channel planning and interference management.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048962.png" },
    { title: "Security", desc: "Enterprise-grade security, guest access, and device isolation.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048965.png" },
    { title: "Alerts", desc: "Real-time monitoring and alerts for network health.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048967.png" },
    { title: "IoT-Ready", desc: "Support for IoT devices and smart infrastructure.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048970.png" },
    { title: "Hotel WiFi", desc: "Custom solutions for hotels, resorts, and hospitality.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048973.png" },
    { title: "Campus WiFi", desc: "High-capacity WiFi for schools, colleges, and campuses.", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048975.png" },
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#7b98b8] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
          alt="Wifi Design"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / WIFI DESIGN</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Wifi Design
          </h1>
        </div>
      </section>

      {/* Coverage & Performance Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Wifi Coverage"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ensuring Maximum Coverage And Performance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            FiberFlow provides hotel/campus wifi design, deployment & audit for small and large properties. Our solutions ensure maximum coverage, high capacity, and robust security. We optimize channel planning, interference management, and provide real-time monitoring and alerts. Custom solutions for hotels, campuses, and IoT-ready infrastructure.
          </p>
        </div>
      </section>

      {/* Wifi Features Section */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Coverage, Security, And Bandwidth In Hotel And Campus WiFi
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wifiFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start border border-gray-200"
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
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

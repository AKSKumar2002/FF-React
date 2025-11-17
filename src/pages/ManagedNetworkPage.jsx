import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ManagedNetworkPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Managed Network Services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / MANAGED NETWORK</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Managed Network Services
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Design, deployment, and management of secure, high-performance network infrastructure for your business.
          </p>
        </div>
      </section>

      {/* Design, Deployment, Management Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
            alt="Network Management"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 to-transparent"></div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Design, Deployment, And Management
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            As technology evolves, so does the complexity of managing IT systems. Managed Network Services offer businesses the advantage of expert support and advanced tools to monitor and maintain their networks. With the right managed service provider, your business can ensure maximum uptime, prevent disruptions, and streamline operations.
          </p>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Comprehensive Network Infrastructure Services For Businesses
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Network Infrastructure Design",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            },
            {
              title: "Deployment Services",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048957.png"
            },
            {
              title: "On Premises VPN Services",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048962.png"
            },
            {
              title: "Network Configuration Management",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048965.png"
            },
            {
              title: "Network Security",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048967.png"
            },
            {
              title: "Managed Enterprise Network",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048970.png"
            },
            {
              title: "Cloud Infra Managed Service",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048973.png"
            },
            {
              title: "Co Location Services",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048975.png"
            },
            {
              title: "Network Auditing",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048978.png"
            },
            {
              title: "Managed Infra Service",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048980.png"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-center border border-white/10"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-base mb-2 text-white text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

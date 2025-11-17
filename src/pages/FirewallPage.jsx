import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FirewallPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#7b98b8] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Firewall Security"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / FIREWALL</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Firewall Solutions
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Protect your data, assets, and users in hybrid environments with advanced firewall solutions.
          </p>
        </div>
      </section>

      {/* Firewall Solutions Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Firewall Technology"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Protect Your Data, Assets, And Users
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            FiberFlow offers firewall solutions to safeguard your business from cyber threats, data breaches, and unauthorized access. Our firewalls are designed for hybrid environments, providing AI-powered security, simplified operations, and a better user experience. Enhance your security posture and ensure compliance with our managed firewall services.
          </p>
        </div>
      </section>

      {/* Firewall Features Section */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Enhancing Security And Operations With AI-Powered Solutions
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Security",
              desc: "Advanced threat detection and prevention using artificial intelligence.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048967.png"
            },
            {
              title: "Simplified Operations",
              desc: "Centralized management and automated policy enforcement.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048957.png"
            },
            {
              title: "Better User Experience",
              desc: "Seamless access and optimized performance for users.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048970.png"
            },
            {
              title: "Hybrid Environment Support",
              desc: "Protect on-premises, cloud, and remote users with unified policies.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048973.png"
            },
            {
              title: "Compliance & Reporting",
              desc: "Automated compliance checks and detailed security reports.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048978.png"
            },
            {
              title: "24/7 Monitoring",
              desc: "Continuous monitoring and rapid response to threats.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048980.png"
            },
          ].map((item, idx) => (
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

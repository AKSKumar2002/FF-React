import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function P2PPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
          alt="Intranet P2P Network"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / P2P</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Intranet / P2P Connectivity
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Ultra-secure, low-latency private networking for your organization.
          </p>
        </div>
      </section>

      {/* What is Intranet Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Private Network"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 to-transparent"></div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            What Is An Intranet? A Private Network For Your Organization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            An intranet is a private network accessible only to an organization's staff. It enables employees to share information, collaborate on projects, and communicate resources like documents, data, and communication tools. Essentially, it's like a mini-Internet for a company, designed to improve communication and productivity within the organization.
          </p>
        </div>
      </section>

      {/* P2P Features Section */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Ultra-Secure, Low-Latency Intranet / P2P Connectivity For Your Organization
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Ultra Secure",
              desc: "Highly secure connection without a hop; physical links ensure your company network data are closed and traffic will be 100% private.",
              icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            },
            {
              title: "Ultra Low Latency",
              desc: "Dedicated points for direct P2P to multiple paths, helping minimize latency, allowing low-lag access applications in real time.",
              icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
            },
            {
              title: "Ultra Fast",
              desc: "99.9% assurance on the bandwidth promised and on time.",
              icon: "https://cdn-icons-png.flaticon.com/512/2921/2921229.png"
            },
            {
              title: "Multi Connectivity",
              desc: "Ensures connectivity with our core, fiber and wireless network PoPs for guaranteed connection even if one path goes down.",
              icon: "https://cdn-icons-png.flaticon.com/512/2921/2921232.png"
            },
            {
              title: "Reliable",
              desc: "Redundant links and failover for robust, uninterrupted service; uptime rates exceeding industry standards.",
              icon: "https://cdn-icons-png.flaticon.com/512/2921/2921240.png"
            },
            {
              title: "Cost",
              desc: "Optimized operational bandwidth costs; guaranteed pricing for predictable growth and expansion.",
              icon: "https://cdn-icons-png.flaticon.com/512/2921/2921236.png"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-start border border-white/10"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
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

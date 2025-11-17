import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BusinessBroadbandPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Business Broadband Modern"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / BUSINESS BROADBAND</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Business Broadband
          </h1>
          <p className="text-lg text-gray-300 mt-2 max-w-xl">
            Experience blazing fast, reliable broadband for your office.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Business Team Modern"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Experience Blazing Fast Business Broadband For Your Office
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our business broadband delivers high performance connectivity tailored for modern offices. With fast speeds, low latency, and robust cloud access, you can run bandwidth-hungry applications, video conferencing, and seamless collaboration. Enjoy high compatibility, integrated routing, and self-healing agile network design. 24/7 expert support and proactive monitoring keep your business online and productive.
          </p>
        </div>
      </section>

      {/* Connectivity Solutions Section */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Empowering Your Business With Advanced Connectivity Solutions
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Priority Bandwidth",
              desc: "Prioritization ensures better performance for critical business applications.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            },
            {
              title: "Custom Made",
              desc: "We can tailor custom broadband plans for your business needs.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048957.png"
            },
            {
              title: "Static IPv4",
              desc: "Get static dedicated IPv4 for your business applications.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048962.png"
            },
            {
              title: "Self Healing Agile Network",
              desc: "Redundant links and self-healing design for maximum uptime.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048965.png"
            },
            {
              title: "High Up-Time",
              desc: "99.9% uptime with proactive monitoring and support.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048967.png"
            },
            {
              title: "Dedicated Support",
              desc: "Expert support with fast response for business-critical needs.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048970.png"
            },
            {
              title: "Low Load Time",
              desc: "Optimized routing for minimal latency and fast access.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048973.png"
            },
            {
              title: "Affordable High Bandwidth",
              desc: "Flexible, cost-efficient broadband with reliable speeds.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048975.png"
            },
            {
              title: "Dual Stack Support",
              desc: "IPv4 & IPv6 support for future-ready business connectivity.",
              icon: "https://cdn-icons-png.flaticon.com/512/1048/1048978.png"
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

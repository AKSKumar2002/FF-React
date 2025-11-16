import React from "react";
import { Wifi, Zap, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Wifi className="w-10 h-10 text-pink-500" />, title: "Seamless Wi-Fi", description: "Enjoy constant Wi-Fi connectivity within your coverage area." },
    { icon: <Zap className="w-10 h-10 text-pink-500" />, title: "Fast Setup", description: "Quick installation and immediate use." },
    { icon: <ShieldCheck className="w-10 h-10 text-pink-500" />, title: "Secure Network", description: "Your data is protected with advanced encryption." }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

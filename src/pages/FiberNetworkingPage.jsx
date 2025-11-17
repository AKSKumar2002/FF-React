import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FiberNetworkingPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#7b98b8] via-[#1e293b] to-[#0d0d0d]">
        <img
          src="https://images.unsplash.com/photo-1465101178521-c1a6bca4a1c2?auto=format&fit=crop&w=1200&q=80"
          alt="Fiber Networking"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left w-full max-w-4xl px-6">
          <div className="text-xs mb-2 text-white/70">HOME / SERVICES / FIBER NETWORKING</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Fiber Networking
          </h1>
        </div>
      </section>

      {/* Fiber Optic Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Fiber Optic Services"
            className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            style={{ maxHeight: "260px" }}
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Let Us Handle Your Fiber Optic Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond offering lightning-fast broadband, FiberFlow manages the design, deployment, and maintenance of fiber optic networks for businesses, campuses, and residential complexes. Our expert team ensures seamless installation, precise splicing, and robust troubleshooting for new and existing fiber infrastructure. We deliver reliable fiber solutions for a future of scalable and secure broadband networks.
          </p>
        </div>
      </section>

      {/* Fiber Optic Cable Services Section */}
      <section className="bg-[#f8fafc] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Fiber Optic Cable Services
            </h2>
            <ul className="text-black text-base space-y-2 mb-6">
              <li>✔ Fusion Splicing Services</li>
              <li>✔ Fiber Fault Detection And Fusion Splicing</li>
              <li>✔ Fiber Optic Cable Laying And Termination</li>
              <li>✔ Fiber Optic Cable Testing And Troubleshooting</li>
              <li>✔ Fiber Optic Cable Maintenance</li>
              <li>✔ Fiber Optic Network Expansion</li>
              <li>✔ Fiber To The Home (FTTH) Construction</li>
              <li>✔ Manhole Or Duct Based Splicing</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Fiber Optic Cable"
              className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
              style={{ maxHeight: "260px" }}
            />
          </div>
        </div>
      </section>

      {/* Additional Fiber Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Our Fiber Services Offering Includes:
            </h2>
            <ul className="text-gray-300 text-base space-y-2 mb-6">
              <li>• Fiber Consultation</li>
              <li>• Fiber Cable Laying</li>
              <li>• Fiber Fault Detection & Splicing</li>
              <li>• FTTH (Fiber To The Home) Construction</li>
              <li>• Fiber Cable Maintenance</li>
              <li>• Fiber Cable Expansion</li>
              <li>• Fiber Cable Troubleshooting</li>
              <li>• Fiber Cable Audit</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
              alt="Fiber Network"
              className="rounded-2xl shadow-2xl w-full object-cover border border-white/10"
              style={{ maxHeight: "260px" }}
            />
            <div className="mt-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Fiber Networking Icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

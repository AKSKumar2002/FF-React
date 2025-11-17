import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [selectedType, setSelectedType] = useState("Contact");
  const types = ["Contact", "Complaint", "Review"];

  return (
    <div className="font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="relative bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center"> {/* wider than 3xl */}
  <h2 className="text-4xl md:text-6xl font-bold pt-20">Contact</h2>
</div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white pt-5 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* wider than 4xl */}

          {/* LEFT SIDE CONTENT */}
          <div>
            {/* LABEL BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-500/5 text-red-400 shadow-[0_0_12px_rgba(255,0,0,0.25)] mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h4l2-7 4 14 2-7h6"
              />
            </svg>
            <span className="text-sm font-medium">Asked Questions</span>
          </div>

            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Talk with us for your <span className="text-red-500">broadband</span> need
            </h2>

            {/* Contact Info */}
            <div className="mt-10 space-y-8">

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                  <MapPin className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Address</span>
                  <h3 className="text-lg font-semibold">
                    Othakalmandapam, Coimbatore, Tamilnadu.
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                  <Phone className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Phone</span>
                  <p className="text-xs text-gray-400 mt-1">Broadband Services</p>
                  <h3 className="text-lg font-semibold">
                    +91 99407 97720 <br /> +91 93603 97340
                  </h3>

                  <p className="text-xs text-gray-400 mt-3">Leaseline Services</p>
                  <h3 className="text-lg font-semibold">
                    +91 98439 52232 <br /> +91 97916 11143
                  </h3>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                  <Mail className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Email Us</span>
                  <h3 className="text-lg font-semibold">
                    fiberflow.ind@gmail.com <br /> fiberflow.tech@gmail.com
                  </h3>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Send Us Message</h3>
            
            {/* Selection Buttons */}
            <div className="flex gap-3 mb-6">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-xl font-semibold transition ${
                    selectedType === type
                      ? "bg-red-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <p className="text-gray-400 text-sm mb-6">
              You selected: <span className="text-red-500 font-semibold">{selectedType}</span>
            </p>

            <form className="space-y-6">
              <div>
                <label className="text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-red-500"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Mobile</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-red-500"
                  placeholder="Mobile Number"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-red-500"
                  placeholder="support@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Subject</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-red-500"
                  placeholder="I would like to discuss"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-red-500"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

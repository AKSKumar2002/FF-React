import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative bg-black text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-3">
            <a href="/" className="hover:text-red-500 transition">Home</a> 
            <span className="mx-2">/</span> Contact
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE CONTENT */}
          <div>
            <p className="tracking-widest text-red-500 uppercase text-sm font-semibold">
              Asked Questions
            </p>

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
            <h3 className="text-2xl font-bold">Send Us Message</h3>
            <p className="text-gray-400 text-sm mt-1 mb-8">
              Questions or you would just like to say hello — contact us.
            </p>

            <form className="space-y-6">
              
              <div>
                <label className="text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Mobile</label>
                <input
                  type="number"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
                  placeholder="Mobile Number"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
                  placeholder="support@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Subject</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
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
    </>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

export default function Complaints() {
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_PUBLIC_KEY")
      .then(() => {
        setAlertMsg("Your complaint was submitted successfully!");
        setAlertType("success");
        e.target.reset();
      })
      .catch(() => {
        setAlertMsg("Failed to send complaint. Please try again.");
        setAlertType("danger");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setAlertMsg(""), 4000);
      });
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="w-full h-64 bg-black/50 bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <h2 className="text-white text-4xl font-bold relative z-10">
          Complaints
        </h2>
      </section>

      {/* Complaint Form Section */}
      <section className="py-16 px-4 flex justify-center">
        <div
          className="max-w-2xl w-full p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
          style={{ marginTop: "-50px" }}
        >
          <h3 className="text-white text-3xl font-semibold text-center">
            Send Us Your Complaints
          </h3>

          <p className="text-gray-300 text-center mt-2 mb-6">
            Share Internet issues, payment queries, or any service problem here.
          </p>

          {/* Alert Message */}
          {alertMsg && (
            <div
              className={`p-3 rounded-md text-center mb-4 ${
                alertType === "success"
                  ? "bg-green-600/40 text-green-200"
                  : "bg-red-600/40 text-red-200"
              }`}
            >
              {alertMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white">Full Name</label>
                <input
                  name="full_name"
                  required
                  className="w-full mt-1 bg-white/20 text-white p-3 rounded-lg outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="text-white">Mobile</label>
                <input
                  type="number"
                  name="contact_number"
                  required
                  className="w-full mt-1 bg-white/20 text-white p-3 rounded-lg outline-none"
                  placeholder="Mobile Number"
                />
              </div>

              <div>
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="contact_email"
                  required
                  className="w-full mt-1 bg-white/20 text-white p-3 rounded-lg outline-none"
                  placeholder="support@gmail.com"
                />
              </div>

              <div>
                <label className="text-white">Issue Type</label>
                <input
                  name="issue_type"
                  required
                  className="w-full mt-1 bg-white/20 text-white p-3 rounded-lg outline-none"
                  placeholder="Connectivity, Payment..."
                />
              </div>

              <div className="col-span-2">
                <label className="text-white">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full mt-1 bg-white/20 text-white p-3 rounded-lg outline-none h-32"
                  placeholder="Write your message here"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition-all"
            >
              {loading ? "Sending..." : "Submit Complaint"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

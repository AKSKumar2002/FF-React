import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

export default function Review() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const sendReview = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_klrmigc",          // your EmailJS service ID
        "template_owyf8lp",         // your EmailJS template ID
        formRef.current,
        "z91vd5nbf_X9DkX3k"         // your EmailJS public key
      )
      .then(
        () => {
          setAlert({
            show: true,
            type: "success",
            message: "Your review was submitted successfully!",
          });
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setAlert({
            show: true,
            type: "error",
            message: "Failed to send your review. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Navbar />

      {/* HEADER SECTION */}
      <section className="relative w-full py-28 bg-black text-white text-center">
        <div className="absolute inset-0 bg-[url('/stars-bg.jpg')] opacity-10 bg-cover"></div>

        <h1 className="text-5xl font-bold relative z-10">Review</h1>
        <p className="mt-4 text-gray-300 relative z-10">
          Share your experience and help us improve our service.
        </p>

        <div className="mt-6 text-sm text-gray-400 relative z-10">
          <a href="/" className="hover:text-pink-500 transition">
            Home
          </a>{" "}
          › Review
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-center mb-6">
              Send Us Your Review
            </h2>

            <p className="text-center text-gray-300 mb-10">
              Your feedback is very important for us.
            </p>

            <form ref={formRef} onSubmit={sendReview} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="text-sm text-gray-300">Full Name</label>
                <input
                  name="review_full_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full mt-2 rounded-lg bg-white/10 border border-white/20 p-3 text-white outline-none focus:border-pink-500"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="text-sm text-gray-300">Designation</label>
                <input
                  name="review_designation"
                  type="text"
                  required
                  placeholder="Your designation"
                  className="w-full mt-2 rounded-lg bg-white/10 border border-white/20 p-3 text-white outline-none focus:border-pink-500"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm text-gray-300">Mobile</label>
                <input
                  name="review_contact_number"
                  type="number"
                  required
                  placeholder="Phone number"
                  className="w-full mt-2 rounded-lg bg-white/10 border border-white/20 p-3 text-white outline-none focus:border-pink-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  name="review_contact_email"
                  type="email"
                  required
                  placeholder="support@example.com"
                  className="w-full mt-2 rounded-lg bg-white/10 border border-white/20 p-3 text-white outline-none focus:border-pink-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">Your Review</label>
                <textarea
                  name="review_message"
                  required
                  placeholder="Write your review here..."
                  rows={5}
                  className="w-full mt-2 rounded-lg bg-white/10 border border-white/20 p-3 text-white outline-none focus:border-pink-500"
                ></textarea>
              </div>

              {/* Alert Box */}
              {alert.show && (
                <div
                  className={`p-3 rounded-lg text-center ${
                    alert.type === "success"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {alert.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition disabled:bg-gray-500"
              >
                {loading ? "Sending..." : "Submit Review"}
              </button>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

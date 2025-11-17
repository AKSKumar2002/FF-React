import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Helper to parse CSV (simple, for demo)
function parseCSV(csv) {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    let obj = {};
    headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
    return obj;
  });
}

export default function PlansPage({ city }) {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Use direct export format for Google Sheets CSV
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhj2ll_BGPHr2M5pYOeu0abMNxQ_5OzrNaxBd5pj-rfSKR2pKbxqhcTZ848HK1-LKNfCPy8WvNwpJX/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(sheetUrl)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch plans");
        return res.text();
      })
      .then(csv => {
        const allPlans = parseCSV(csv);
        // Robust city filter
        const cityPlans = allPlans.filter(plan =>
          plan.city &&
          city &&
          plan.city.trim().toLowerCase() === city.trim().toLowerCase()
        );
        setPlans(cityPlans);
        setLoading(false);
      })
      .catch(err => {
        setError("Unable to fetch plans. Please try again later.");
        setLoading(false);
      });
  }, [city]);

  const ottLogos = [
    new URL("../assets/ott/1-hotstar.png", import.meta.url).href,
    new URL("../assets/ott/2-prime.png", import.meta.url).href,
    new URL("../assets/ott/3-voot.png", import.meta.url).href,
    new URL("../assets/ott/4-sony.png", import.meta.url).href,
    new URL("../assets/ott/5-sun.png", import.meta.url).href,
    new URL("../assets/ott/6-zee5.png", import.meta.url).href,
    new URL("../assets/ott/7-alt.png", import.meta.url).href,
    new URL("../assets/ott/8-epic.png", import.meta.url).href,
    new URL("../assets/ott/9-aha.png", import.meta.url).href,
    new URL("../assets/ott/10-ullu.png", import.meta.url).href,
    new URL("../assets/ott/16-mx-player.png", import.meta.url).href,
  ];

  const scrollerRef = useRef(null);
  const scrollSpeed = 0.6;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId;
    let paused = false;

    const step = () => {
      if (!paused) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const handleMouseEnter = () => (paused = true);
    const handleMouseLeave = () => (paused = false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white pt-20 pb-20 px-4 md:px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* PAGE TITLE */}
          <div className="text-center mb-16 mt-10">
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
            <span className="text-sm font-medium">Pricing Package</span>
          </div>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              Popular <span className="text-red-500">Plans</span>
              {city && (
                <span className="block text-lg text-gray-400 mt-2">
                  for {city}
                </span>
              )}
            </h2>
          </div>

          {/* PLANS GRID */}
          {loading ? (
            <div className="text-center text-gray-400">Loading plans...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : plans.length === 0 ? (
            <div className="text-center text-gray-400">No plans found for this city.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="relative rounded-3xl p-10 bg-[#0d0d0dff] border border-red-500/20 
                             shadow-[0_0_25px_rgba(255,0,0,0.15)] transition duration-300
                             hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
                >
                  <span className="text-red-400 font-semibold text-l">{plan.title}</span>
                  <p className="text-gray-300 text-sm mt-2">{plan.subtitle}</p>
                  <div className="text-5xl font-bold text-white mt-6">
                    ₹{plan.price}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 text-lg">✔</span>
                      Internet Speed: <span className="text-white">{plan.speed}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 text-lg">✔</span>
                      Data Limit: {plan.data}
                    </li>
                    {/* ...add more fields as needed... */}
                  </ul>
                  <button className="mt-10 w-full py-3 rounded-full bg-red-600 hover:bg-red-700 
                                     text-white font-semibold transition">
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* OTT LOGOS */}
          <div className="mt-24 text-center">
            <h3 className="text-gray-300 mb-6 text-sm tracking-widest uppercase">
              Available OTTs
            </h3>

            <div
              ref={scrollerRef}
              className="relative overflow-hidden"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className="inline-flex gap-6 items-center" aria-hidden>
                {ottLogos.map((logo, idx) => (
                  <div
                    key={`a-${idx}`}
                    className="min-w-[120px] bg-white/5 backdrop-blur p-3 rounded-xl border border-white/10 flex items-center justify-center"
                  >
                    <img src={logo} alt={`ott-${idx}`} className="w-20 h-auto" />
                  </div>
                ))}
              </div>

              {/* duplicate once for smooth looping */}
              <div className="inline-flex gap-6 items-center" aria-hidden>
                {ottLogos.map((logo, idx) => (
                  <div
                    key={`b-${idx}`}
                    className="min-w-[120px] bg-white/5 backdrop-blur p-3 rounded-xl border border-white/10 flex items-center justify-center"
                  >
                    <img src={logo} alt={`ott-dup-${idx}`} className="w-20 h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

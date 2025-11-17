import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PlansPage({ city }) {
  const plans = [
    {
      title: "Standard Package",
      subtitle: "Fiber Internet",
      speed: "20Mbps",
      data: "300 GB",
      price: "249",
      icon: "flaticon-network-cable",
    },
    {
      title: "Fast Package",
      subtitle: "Fiber Internet",
      speed: "100Mbps",
      data: "1000 GB",
      price: "599",
      icon: "flaticon-smart-tv-1",
    },
    {
      title: "Extremely Fast Package",
      subtitle: "Home Internet",
      speed: "300Mbps",
      data: "3000 GB",
      price: "1399",
      icon: "flaticon-home",
    },
    {
      title: "SME Plan",
      subtitle: "Internet",
      speed: "150Mbps",
      data: "2500 GB",
      price: "2600",
      icon: "flaticon-internet-of-things",
    },
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="relative rounded-3xl p-10 bg-[#0d0d0dff] border border-red-500/20 
                           shadow-[0_0_25px_rgba(255,0,0,0.15)] transition duration-300
                           hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                                  bg-red-600 text-white px-5 py-1 rounded-full text-sm shadow-lg">
                    Popular
                  </div>
                )}

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
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 text-lg">✔</span>
                    WiFi Router & Security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 text-lg">✔</span>
                    Unlimited Devices
                  </li>
                </ul>

                <button className="mt-10 w-full py-3 rounded-full bg-red-600 hover:bg-red-700 
                                   text-white font-semibold transition">
                  Choose Package
                </button>
              </div>
            ))}
          </div>

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

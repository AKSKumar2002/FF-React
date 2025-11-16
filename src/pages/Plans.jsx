import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PlansPage() {
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
  new URL("../assets/ott/17-shemaroo.png", import.meta.url).href,
];


  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* ---------- PAGE TITLE ---------- */}
          <div className="text-center mb-16">
            <h3 className="text-gray-300 text-sm tracking-widest uppercase">
              Pricing Package
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              Popular <span className="text-red-500">Plans</span>
            </h2>
          </div>

          {/* ---------- PLANS GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="
                  bg-white/5 border border-white/10 p-6 rounded-2xl 
                  backdrop-blur-xl shadow-lg hover:shadow-red-500/20 
                  transition duration-300 hover:bg-white/10
                "
              >
                <div className="text-center space-y-3">
                  <span className="text-gray-300 text-sm">{plan.title}</span>
                  <h4 className="text-xl font-semibold">{plan.subtitle}</h4>

                  <div className="text-4xl my-3">
                    <i className={plan.icon}></i>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm mt-4">
                    <li>✔ Internet with {plan.speed}</li>
                    <li>✔ {plan.data} Data</li>
                    <li>✔ WiFi Router & Security</li>
                    <li>✔ Unlimited Devices</li>
                  </ul>

                  <h3 className="text-3xl font-bold mt-4">
                    ₹{plan.price}
                    <span className="text-gray-400 text-sm"> / month</span>
                  </h3>

                  <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition">
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- OTT LOGOS ---------- */}
          <div className="mt-24 text-center">
            <h3 className="text-gray-300 mb-6 text-sm tracking-widest uppercase">
              Available OTTs
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {ottLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg p-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                >
                  <img src={logo} alt="OTT Logo" className="w-full" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

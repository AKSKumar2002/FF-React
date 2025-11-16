import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import your existing Navbar
import Footer from "../components/Footer"; // Import Footer component

const features = [
  { icon: "🚀", title: "Fast Installation" },
  { icon: "💰", title: "Cheap Pricing Plan" },
  { icon: "🕒", title: "24/7 hr Support" },
  { icon: "📶", title: "High-Speed WiFi" },
  { icon: "👨‍💻", title: "Customer Support" },
  { icon: "🔒", title: "Secure Connection" },
];

const faqs = [
  { q: "Which Wi-Fi is best for home?", a: "Fiberflow's fiber-optic Wi-Fi plans are ideal for home use, offering stable and high-speed connectivity." },
  { q: "Which is the best broadband?", a: "Fiber broadband is the best due to its speed, reliability, and low latency—Fiberflow specializes in this." },
  { q: "Which is the best internet service provider?", a: "Fiberflow is trusted by 2000+ users in Coimbatore for fast speeds, low downtime, and great customer service." },
  { q: "Which is the best internet connection?", a: "Fiber connections provide the best experience for gaming, streaming, and work-from-home—Fiberflow delivers all of these." },
  { q: "How to measure internet speed?", a: "You can visit websites like speedtest.net or use our customer portal to check real-time speed statistics." },
  { q: "Which Wi-Fi plan is best for home?", a: "Our starter 100 Mbps unlimited plan is perfect for most homes—affordable, fast, and reliable." },
  { q: "How to measure broadband speed?", a: "Use any speed testing app or online tool like Ookla Speedtest while connected directly to your router." },
  { q: "Which is the best Wi-Fi connection near me?", a: "Fiberflow provides the best local fiber broadband service in and around Coimbatore—check availability on our website." },
];

export default function About() {
  return (
    <main className="relative min-h-screen text-white text-base overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full animate-blob top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full animate-blob animation-delay-2000 top-[300px] right-[-200px]"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full animate-blob animation-delay-4000 bottom-[100px] left-[50px]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="relative py-24 text-center z-10">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">About Company</h2>
          <p className="text-gray-300">Welcome to FiberFlow – delivering high-speed fiber broadband with over 5+ years of experience.</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        <GlassCard>
          <h3 className="text-3xl font-semibold mb-4">
            <span className="text-red-500">5+</span> Years Of Experience In Broadband <span className="text-red-500">Internet</span>
          </h3>
          <p>We are a leading Internet provider in Coimbatore and surrounding areas, delivering high-speed fiber broadband. With over 2000+ happy customers, we solve network issues quickly and efficiently.</p>
          <ul className="space-y-2 mt-4">
            <li>✅ Advanced networking technology</li>
            <li>✅ Highly qualified engineering team</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <img src="https://img.freepik.com/premium-photo/wireless-network-technology-with-wifi-sign-3d-rendering_772449-12666.jpg" alt="fiber network" className="rounded-3xl shadow-lg" />
        </GlassCard>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 z-10">
        <div className="text-center mb-16">
          <h3 className="text-2xl text-red-500 font-semibold mb-2">Why Choose Us</h3>
          <h2 className="text-4xl font-bold">Explore Why People <span className="text-red-500">Choose Our Service</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <GlassCard key={index}>
              <div className="text-5xl mb-4">{f.icon}</div>
              <h4 className="font-semibold text-xl">{f.title}</h4>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative max-w-6xl mx-auto py-20 px-6 z-10">
        <div className="text-center mb-12">
          <h3 className="text-2xl text-red-500 font-semibold mb-2">Asked Questions</h3>
          <h2 className="text-4xl font-bold">Have Any Questions On Your Minds!</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard>
            <p>We have good customer service 24/7</p>
            <p>You can ask your queries to us, or check here</p>
          </GlassCard>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <GlassCard key={i}>
                <details className="cursor-pointer">
                  <summary className="font-semibold text-lg">{faq.q}</summary>
                  <p className="mt-2 text-gray-300">{faq.a}</p>
                </details>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-20">
  <Footer />
</div>

    </main>
  );
}

// Glass Card component with independent hover light
function GlassCard({ children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 z-10"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), rgba(255,255,255,0))`,
      }}
    >
      {children}
    </div>
  );
}

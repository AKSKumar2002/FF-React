import React from "react";

export default function Features() {
  const features = [
    { title: "Fast Speed", description: "Enjoy blazing fast internet speeds with FiberFlow." },
    { title: "Reliable Connection", description: "Stay connected without interruptions." },
    { title: "Global Coverage", description: "Access internet wherever you go." }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

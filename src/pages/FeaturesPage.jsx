import React from "react";
import Navbar from "../components/Navbar";
import Features from "./Features";
import Footer from "../components/Footer";

export default function FeaturesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Features />
      <Footer />
    </div>
  );
}

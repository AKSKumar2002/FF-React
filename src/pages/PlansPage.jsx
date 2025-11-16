// src/pages/PlansPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Plans from "./Plans"; // now this exists
import Footer from "../components/Footer";

export default function PlansPage() {
  return (
    <div>
      <Navbar />
      <Plans />
      <Footer />
    </div>
  );
}

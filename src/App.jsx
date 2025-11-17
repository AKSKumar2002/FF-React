import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Complaints from "./pages/Complaints";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* <-- IMPORTANT */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        {/* City-specific plans routes */}
        <Route path="/plans/othakkalmandpam" element={<Plans city="Othakkal Mandpam" />} />
        <Route path="/plans/malumpichampatti" element={<Plans city="Malumpichampatti" />} />
        <Route path="/plans/madukarai" element={<Plans city="Madukarai" />} />
        <Route path="/plans/eachinari" element={<Plans city="Eachinari" />} />
        <Route path="/plans/chettipalayam" element={<Plans city="Chettipalayam" />} />
        <Route path="/plans/kinathkadavu" element={<Plans city="Kinathkadavu" />} />
        <Route path="/plans/bodipalayam" element={<Plans city="Bodipalayam" />} />
        <Route path="/plans/palaturai" element={<Plans city="Palaturai" />} />
        <Route path="/plans/seerapalayam" element={<Plans city="Seerapalayam" />} />
        <Route path="/plans/kurumbapalayam" element={<Plans city="Kurumbapalayam" />} />
        <Route path="/plans/pollachi" element={<Plans city="Pollachi" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

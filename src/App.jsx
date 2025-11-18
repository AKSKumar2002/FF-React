import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Complaints from "./pages/Complaints";
import Reviews from "./pages/Reviews";
import IllPage from "./pages/IllPage";
import P2PPage from "./pages/P2PPage";
import ManagedNetworkPage from "./pages/ManagedNetworkPage";
import BusinessBroadbandPage from "./pages/BusinessBroadbandPage";
import SDWANPage from "./pages/SDWANPage";
import VoicePage from "./pages/VoicePage";
import WifiDesignPage from "./pages/WifiDesignPage";
import FirewallPage from "./pages/FirewallPage";
import FiberNetworkingPage from "./pages/FiberNetworkingPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for 4 seconds on initial load
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
        <Route path="/services/ill" element={<IllPage />} />
        <Route path="/services/p2p" element={<P2PPage />} />
        <Route path="/services/managed-network" element={<ManagedNetworkPage />} />
        <Route path="/services/business-broadband" element={<BusinessBroadbandPage />} />
        <Route path="/services/sd-wan" element={<SDWANPage />} />
        <Route path="/services/voice" element={<VoicePage />} />
        <Route path="/services/wifi-design" element={<WifiDesignPage />} />
        <Route path="/services/firewall" element={<FirewallPage />} />
        <Route path="/services/fiber-networking" element={<FiberNetworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

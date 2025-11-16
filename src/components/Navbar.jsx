import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // for desktop hover
  const [broadbandOpen, setBroadbandOpen] = useState(false); // for desktop hover
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  // ACTIVE LINK STYLE
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 border-b-2 border-red-500 pb-1"
      : "hover:text-gray-300 transition";

  // Dropdown items (from image)
  const servicesList = [
    { name: "Internet leased line / ILL", link: "#" },
    { name: "Intranet / P2P", link: "#" },
    { name: "Managed Network Services", link: "#" },
    { name: "Business Broadband", link: "#" },
    { name: "SD-WAN", link: "#" },
    { name: "Voice", link: "#" },
    { name: "Wifi Design", link: "#" },
    { name: "Firewall", link: "#" },
    { name: "Fiber Networking", link: "#" },
  ];

  // Dropdown items for Broadband Plans locations
  const broadbandLocations = [
    { name: "Broadband Plans in Pollachi", link: "#" },
    { name: "Broadband Plans in Anaimalai", link: "#" },
    { name: "Broadband Plans in Vettaikaranpudur", link: "#" },
    { name: "Broadband Plans in Kinathukadavu", link: "#" },
    { name: "Broadband Plans in Negamam", link: "#" },
    { name: "Broadband Plans in Thamaraikulam", link: "#" },
    { name: "Broadband Plans in Pethampatti", link: "#" },
    { name: "Broadband Plans in Nalligoundanpalayam", link: "#" },
    { name: "Broadband Plans in Ponnampuram", link: "#" },
    { name: "Broadband Plans in Kongalnagaram", link: "#" },
    { name: "Broadband Plans in Achipatti", link: "#" },
    { name: "Broadband Plans in Panikkampatti", link: "#" },
    { name: "Broadband Plans in NM Sungam", link: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-base transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-32 cursor-pointer"
          onClick={goHome}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-semibold text-white items-center">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/plans" className={linkClass}>Plans</NavLink></li>
          {/* Broadband Plans Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setBroadbandOpen(true)}
            onMouseLeave={() => setBroadbandOpen(false)}
          >
            <button
              className="flex items-center gap-2 font-semibold text-white hover:text-red-500 transition"
              type="button"
              style={{ background: "none", padding: 0, border: "none" }}
              onClick={() => setBroadbandOpen((v) => !v)}
            >
              Broadband Plans
            </button>
            {broadbandOpen && (
              <ul
                className="absolute left-0 mt-2 w-72 bg-black/95 border border-white/10 rounded-xl shadow-lg z-20 p-4"
                onMouseEnter={() => setBroadbandOpen(true)}
                onMouseLeave={() => setBroadbandOpen(false)}
              >
                <div>
                  <div className="font-bold text-white mb-2">Broadband Plans</div>
                  {broadbandLocations.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.link}
                        className="block px-4 py-2 text-white hover:bg-red-600 rounded-md transition text-left"
                        onClick={() => setBroadbandOpen(false)}
                        tabIndex={0}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </li>
          {/* Fiberflow Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-2 font-semibold text-white hover:text-red-500 transition"
              type="button"
              style={{ background: "none", padding: 0, border: "none" }}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Fiberflow Services
            </button>
            {servicesOpen && (
              <ul
                className="absolute left-0 mt-2 w-64 bg-black/95 border border-white/10 rounded-xl shadow-lg z-20 p-4"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div>
                  <div className="font-bold text-white mb-2">Fiberflow Services</div>
                  {servicesList.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.link}
                        className="block px-4 py-2 text-white hover:bg-red-600 rounded-md transition text-left"
                        onClick={() => setServicesOpen(false)}
                        tabIndex={0}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          <li><NavLink to="/complaints" className={linkClass}>Complaints</NavLink></li>
          <li><NavLink to="/reviews" className={linkClass}>Review</NavLink></li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Get Fiber
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 text-center text-base">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/plans" className={linkClass} onClick={() => setIsOpen(false)}>Plans</NavLink>
          {/* Broadband Plans Dropdown (mobile) */}
          <div className="relative">
            <button
              className="w-full flex justify-between items-center font-semibold text-white hover:text-red-500 transition bg-transparent px-0 py-0"
              onClick={() => setBroadbandOpen((v) => !v)}
              type="button"
              style={{ background: "none", padding: 0, border: "none" }}
            >
              Broadband Plans
            </button>
            {broadbandOpen && (
              <ul className="mt-2 bg-black/95 border border-white/10 rounded-xl shadow-lg z-20 p-4">
                <div>
                  <div className="font-bold text-white mb-2">Broadband Plans</div>
                  {broadbandLocations.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.link}
                        className="block px-4 py-2 text-white hover:bg-red-600 rounded-md transition text-left"
                        onClick={() => {
                          setBroadbandOpen(false);
                          setIsOpen(false);
                        }}
                        tabIndex={0}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </div>
          {/* Fiberflow Services Dropdown (mobile) */}
          <div className="relative">
            <button
              className="w-full flex justify-between items-center font-semibold text-white hover:text-red-500 transition bg-transparent px-0 py-0"
              onClick={() => setServicesOpen((v) => !v)}
              type="button"
              style={{ background: "none", padding: 0, border: "none" }}
            >
              Fiberflow Services
            </button>
            {servicesOpen && (
              <ul className="mt-2 bg-black/95 border border-white/10 rounded-xl shadow-lg z-20 p-4">
                <div>
                  <div className="font-bold text-white mb-2">Fiberflow Services</div>
                  {servicesList.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.link}
                        className="block px-4 py-2 text-white hover:bg-red-600 rounded-md transition text-left"
                        onClick={() => {
                          setServicesOpen(false);
                          setIsOpen(false);
                        }}
                        tabIndex={0}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </div>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/complaints" className={linkClass} onClick={() => setIsOpen(false)}>Complaints</NavLink>
          <NavLink to="/reviews" className={linkClass} onClick={() => setIsOpen(false)}>Review</NavLink>
          <button className="bg-white text-black w-full py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Get Fiber
          </button>
        </div>
      )}
    </nav>
  );
}

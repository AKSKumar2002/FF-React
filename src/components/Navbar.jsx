import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo-h-white.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [broadbandDropdown, setBroadbandDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const broadbandRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remove duplicate mobile dropdown outside click handler
  // Only keep one for mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu-dropdown") &&
        !event.target.closest(".mobile-menu-btn")
      ) {
        setBroadbandDropdown(false);
        setServicesDropdown(false);
        setLoginDropdown(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Toggle logic: only one dropdown open at a time, clicking toggles open/close
  const handleMobileDropdown = (type) => {
    setBroadbandDropdown(type === "broadband" ? !broadbandDropdown : false);
    setServicesDropdown(type === "services" ? !servicesDropdown : false);
    setLoginDropdown(type === "login" ? !loginDropdown : false);
  };

  // Helper for navigation (use react-router for internal links)
  const handleNavigate = (url) => {
    setIsOpen(false);
    setBroadbandDropdown(false);
    setServicesDropdown(false);
    setLoginDropdown(false);
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      navigate(url);
    }
  };

  const goHome = () => {
    // force loader on next mount of Home
    sessionStorage.setItem("ff_home_loader_force", "true");
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

  // URLs for login
  const userLoginUrl = "https://user.fiberflow.co.in";
  const partnerLoginUrl = "https://partner.fiberflow.co.in";

  // City list and URLs (replace with your actual URLs)
  const broadbandCities = [
    { name: "BroadBand in Othakkal Mandpam", url: "/plans/othakkalmandpam" },
    { name: "BroadBand in Malumpichampatti", url: "/plans/malumpichampatti" },
    { name: "BroadBand in Madukarai", url: "/plans/madukarai" },
    { name: "BroadBand in Eachinari", url: "/plans/eachinari" },
    { name: "BroadBand in Chettipalayam", url: "/plans/chettipalayam" },
    { name: "BroadBand in Kinathkadavu", url: "/plans/kinathkadavu" },
    { name: "BroadBand in Bodipalayam", url: "/plans/bodipalayam" },
    { name: "BroadBand in Palaturai", url: "/plans/palaturai" },
    { name: "BroadBand in Seerapalayam", url: "/plans/seerapalayam" },
    { name: "BroadBand in Kurumbapalayam", url: "/plans/kurumbapalayam" },
    { name: "BroadBand in Pollachi", url: "/plans/pollachi" },
  ];

  // Service list and URLs (replace with your actual URLs if needed)
  const servicesList = [
    { name: "Intranet / P2P", url: "/services/p2p" },
    { name: "Managed Network Services", url: "/services/managed-network" },
    { name: "Business Broadband", url: "/services/business-broadband" },
    { name: "SD-WAN", url: "/services/sd-wan" },
    { name: "Voice", url: "/services/voice" },
    { name: "Wifi Design", url: "/services/wifi-design" },
    { name: "Firewall", url: "/services/firewall" },
    { name: "Fiber Networking", url: "/services/fiber-networking" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 text-base transition-all duration-500 font-sans ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-32 cursor-pointer"
          onClick={goHome}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-semibold text-white font-sans">
          <li><NavLink to="/" className={linkClass} onClick={() => sessionStorage.setItem("ff_home_loader_force", "true")}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          {/* NEW: ILL direct link */}
          <li>
            <NavLink to="/services/ill" className={linkClass}>Internet leased line / ILL</NavLink>
          </li>
          {/* Broadband Dropdown */}
          <li className="relative" ref={broadbandRef} style={{ pointerEvents: 'auto' }}>
            <button
              className="hover:text-red-500 transition flex items-center gap-1"
              onClick={() => setBroadbandDropdown((prev) => !prev)}
              type="button"
            >
              Broadband
            </button>
            {broadbandDropdown && (
              <div
                className={`absolute left-0 mt-2 rounded-lg shadow-lg z-[9999] backdrop-blur-lg min-w-max w-auto py-1 ${scrolled ? "bg-black/80 border-white/10" : "bg-white/10 border-white/20"}`}
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setBroadbandDropdown(true)}
                onMouseLeave={() => setBroadbandDropdown(false)}
              >
                {broadbandCities.map((city, idx) => (
                  <button
                    key={city.url}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100/20 text-white font-medium border-b border-white/10 last:border-b-0 whitespace-nowrap"
                    onClick={() => {
                      setBroadbandDropdown(false);
                      window.location.href = city.url;
                    }}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            )}
          </li>
          {/* Services Dropdown (replaces Plans) */}
          <li className="relative" ref={servicesRef} style={{ pointerEvents: 'auto' }}>
            <button
              className="hover:text-red-500 transition flex items-center gap-1"
              onClick={() => setServicesDropdown((prev) => !prev)}
              type="button"
            >
              Services
            </button>
            {servicesDropdown && (
              <div
                className={`absolute left-0 mt-2 rounded-lg shadow-lg z-[9999] backdrop-blur-lg min-w-max w-auto py-1 ${scrolled ? "bg-black/80 border-white/10" : "bg-white/10 border-white/20"}`}
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                {servicesList.map((service, idx) => (
                  <button
                    key={service.url}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100/20 text-white font-medium border-b border-white/10 last:border-b-0 whitespace-nowrap"
                    onClick={() => {
                      setServicesDropdown(false);
                      window.location.href = service.url;
                    }}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li><NavLink to="/contact" className={linkClass}>Contact us</NavLink></li>
        </ul>

        {/* CTA */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
            onClick={() => setLoginDropdown((prev) => !prev)}
          >
            Login
          </button>
          {loginDropdown && (
            <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-[9999] backdrop-blur-lg ${scrolled ? "bg-black/80 border-white/10" : "bg-white/10 border-white/20"}`}>
              <button
                className="block w-full text-left px-4 py-3 hover:bg-red-100/20 text-black font-medium border-b border-white/10"
                style={{ color: "#fff" }}
                onClick={() => {
                  setLoginDropdown(false);
                  window.location.href = userLoginUrl;
                }}
              >
                User Login
              </button>
              <button
                className="block w-full text-left px-4 py-3 hover:bg-red-100/20 text-black font-medium"
                style={{ color: "#fff" }}
                onClick={() => {
                  setLoginDropdown(false);
                  window.location.href = partnerLoginUrl;
                }}
              >
                Partner Login
              </button>
            </div>
          )}
        </div>

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
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 text-center text-base font-sans">
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"}
              onClick={() => {
                sessionStorage.setItem("ff_home_loader_force", "true");
                setIsOpen(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            {/* NEW: ILL direct link in mobile */}
            <NavLink to="/services/ill" className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"} onClick={() => setIsOpen(false)}>
              Internet leased line / ILL
            </NavLink>
            {/* Mobile Broadband Dropdown */}
            <div className="relative w-full mobile-menu-dropdown">
              <button
                className={`mobile-menu-btn w-full text-left px-5 py-2 rounded-lg font-semibold font-sans ${broadbandDropdown ? "bg-red-500 text-white" : "bg-white/10"} hover:bg-red-500 hover:text-white transition flex items-center justify-between`}
                onClick={() => handleMobileDropdown("broadband")}
              >
                <span>Broadband</span>
                <span className="ml-2">{broadbandDropdown ? "▲" : "▼"}</span>
              </button>
              {broadbandDropdown && (
                <div
                  className="absolute left-0 w-full mt-2 rounded-lg shadow-lg z-[9999] bg-black/95 border border-white/10 py-1 flex flex-col"
                  style={{ pointerEvents: 'auto' }}
                >
                  {broadbandCities.map((city) => (
                    <button
                      key={city.url}
                      className="block w-full text-left px-4 py-2 hover:bg-red-500/80 text-white font-medium border-b border-white/10 last:border-b-0 whitespace-nowrap"
                      onClick={() => handleNavigate(city.url)}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Services Dropdown */}
            <div className="relative w-full mobile-menu-dropdown">
              <button
                className={`mobile-menu-btn w-full text-left px-5 py-2 rounded-lg font-semibold font-sans ${servicesDropdown ? "bg-red-500 text-white" : "bg-white/10"} hover:bg-red-500 hover:text-white transition flex items-center justify-between`}
                onClick={() => handleMobileDropdown("services")}
              >
                <span>Services</span>
                <span className="ml-2">{servicesDropdown ? "▲" : "▼"}</span>
              </button>
              {servicesDropdown && (
                <div
                  className="absolute left-0 w-full mt-2 rounded-lg shadow-lg z-[9999] bg-black/95 border border-white/10 py-1 flex flex-col"
                  style={{ pointerEvents: 'auto' }}
                >
                  {servicesList.map((service) => (
                    <button
                      key={service.url}
                      className="block w-full text-left px-4 py-2 hover:bg-red-500/80 text-white font-medium border-b border-white/10 last:border-b-0 whitespace-nowrap"
                      onClick={() => handleNavigate(service.url)}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/contact" className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to="/complaints" className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"} onClick={() => setIsOpen(false)}>Complaints</NavLink>
            <NavLink to="/reviews" className={linkClass + " w-full text-left px-5 py-2 rounded-lg font-semibold font-sans bg-white/10 hover:bg-red-500 hover:text-white transition"} onClick={() => setIsOpen(false)}>Review</NavLink>
            {/* Mobile Login Dropdown */}
            <div className="relative w-full mobile-menu-dropdown">
              <button
                className={`mobile-menu-btn bg-white text-black px-5 py-2 rounded-lg font-semibold font-sans ${loginDropdown ? "bg-red-500 text-white" : ""} hover:bg-red-500 hover:text-white transition w-full`}
                onClick={() => handleMobileDropdown("login")}
              >
                Login
              </button>
              {loginDropdown && (
                <div className="absolute left-0 w-full mt-2 rounded-lg shadow-lg z-[9999] bg-black/95 border border-white/10 flex flex-col">
                  <button
                    className="block w-full text-left px-4 py-3 hover:bg-red-500/80 text-white font-medium border-b border-white/10"
                    onClick={() => handleNavigate(userLoginUrl)}
                  >
                    User Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-3 hover:bg-red-500/80 text-white font-medium"
                    onClick={() => handleNavigate(partnerLoginUrl)}
                  >
                    Partner Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

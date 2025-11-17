import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo-h-white.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoginDropdown(false);
      }
    }
    if (loginDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [loginDropdown]);

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

  // URLs for login
  const userLoginUrl = "https://user.fiberflow.co.in";
  const partnerLoginUrl = "https://partner.fiberflow.co.in";

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
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/plans" className={linkClass}>Plans</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          {/*<li><NavLink to="/complaints" className={linkClass}>Complaints</NavLink></li>
          <li><NavLink to="/reviews" className={linkClass}>Review</NavLink></li>*/}
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
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50
                            bg-white/10 backdrop-blur-lg border border-white/20">
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
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/plans" className={linkClass} onClick={() => setIsOpen(false)}>Plans</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/complaints" className={linkClass} onClick={() => setIsOpen(false)}>Complaints</NavLink>
          <NavLink to="/reviews" className={linkClass} onClick={() => setIsOpen(false)}>Review</NavLink>

          {/* Mobile Login Dropdown */}
          <div className="relative">
            <button
              className="bg-white text-black px-5 py-2 rounded-full font-semibold font-sans hover:bg-red-500 hover:text-white transition w-full"
              onClick={() => setLoginDropdown((prev) => !prev)}
            >
              Login
            </button>
            {loginDropdown && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-lg z-50
                              bg-white/10 backdrop-blur-lg border border-white/20">
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
        </div>
      )}
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-h-white.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => {
                // force loader when navigating home from footer
                sessionStorage.setItem("ff_home_loader_force", "true");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 50);
              }}
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <img src={logo} alt="QUBO Logo" className="w-40 drop-shadow-lg" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-speed fiber broadband provider in Coimbatore. Experience lightning-fast internet with unmatched reliability.
            </p>
            
            {/* Social Icons with Hover Effects */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: "fab fa-facebook-f", href: "#", color: "hover:bg-blue-600" },
                { icon: "fab fa-twitter", href: "#", color: "hover:bg-sky-500" },
                { icon: "fab fa-instagram", href: "#", color: "hover:bg-pink-600" },
                { icon: "fab fa-linkedin-in", href: "#", color: "hover:bg-blue-700" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-sm`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/plans", label: "Plans & Pricing" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="w-0 group-hover:w-6 h-0.5 bg-red-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold mb-3 text-red-500">Support</h3>
            <ul className="space-y-2">
              {[
                { to: "/contact", label: "Contact Us" },
                { to: "/complaints", label: "Complaints" },
                { to: "/review", label: "Review" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-6 h-0.5 bg-red-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-red-500 font-semibold">QUBO</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500"></div>
    </footer>
  );
}
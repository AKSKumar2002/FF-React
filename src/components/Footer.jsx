import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-h-white.png"; // update path

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side Links */}
        <div className="flex flex-col md:items-start items-center gap-2">
          <ul className="flex gap-4 text-gray-300 text-sm font-medium">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
            <li><Link to="/plans" className="hover:text-red-500 transition">Plans</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
            <li><Link to="/complaints" className="hover:text-red-500 transition">Complaints</Link></li>
            <li><Link to="/review" className="hover:text-red-500 transition">Review</Link></li>
          </ul>

          <p className="text-gray-400 text-xs mt-1">
            &copy; {new Date().getFullYear()} QUBO. All Rights Reserved.
          </p>
        </div>

        {/* Right Side (Logo + Text + Social) */}
        <div className="flex flex-col md:items-end items-center gap-2">

          {/* Logo + Text Side-by-Side */}
          <div className="flex items-center gap-4">
            <Link
  to="/"
  onClick={() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }}
  className="cursor-pointer"
>
  <img src={logo} alt="QUBO Logo" className="w-32" />
</Link>


            <p className="text-gray-300 text-sm max-w-xs text-left md:text-right">
              High-speed fiber broadband provider in Coimbatore.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-1 text-sm">
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-linkedin-in"></i></a>
          </div>

        </div>

      </div>
    </footer>
  );
}

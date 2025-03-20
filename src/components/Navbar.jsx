import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-100 text-sky-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="sm:w-36 w-24 transition-transform duration-300 hover:scale-105"
            src={assets.Logo}
            alt="GM Tech Logo"
          />
        </Link>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-sky-900 transition-all duration-300 ease-in-out transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-sky-900 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-sky-900 transition-all duration-300 ease-in-out transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-12 items-center">
          <li>
            <Link
              to="/"
              className="relative text-lg font-semibold tracking-wide group hover:text-sky-600 transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="relative text-lg font-semibold tracking-wide group hover:text-sky-600 transition-all duration-300 ease-in-out"
            >
              Services
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-lg font-semibold tracking-wide group hover:text-sky-600 transition-all duration-300 ease-in-out"
            >
              About
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-sky-700 to-sky-800 rounded-full shadow-2xl hover:from-sky-800 hover:to-sky-900 hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (Visible when Hamburger is clicked) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-sky-100 transform transition-all duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-10">
            <li>
              <Link
                to="/"
                className="text-2xl font-semibold text-sky-900 hover:text-sky-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-2xl font-semibold text-sky-900 hover:text-sky-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-2xl font-semibold text-sky-900 hover:text-sky-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-10 py-4 text-xl font-semibold text-white bg-gradient-to-r from-sky-700 to-sky-800 rounded-full shadow-2xl hover:from-sky-800 hover:to-sky-900 hover:scale-105 transition-all duration-300 ease-in-out transform"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
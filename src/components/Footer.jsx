import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-800 to-sky-900 text-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 bg-sky-900/20 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start">
          <a href="/" className="flex items-center">
            <img
              className="w-32 sm:w-36 md:w-40 mb-4 sm:mb-6 transition-transform duration-300 hover:scale-105"
              src={assets.Logo}
              alt="GM Tech Logo"
            />
          </a>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            GM Tech Solutions delivers elite cybersecurity and IT services, safeguarding your business in the digital age with unmatched expertise.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-lg sm:text-xl font-semibold text-sky-300 mb-4 sm:mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <li>
              <a href="/" className="text-gray-200 hover:text-sky-400 text-base sm:text-lg transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-200 hover:text-sky-400 text-base sm:text-lg transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-200 hover:text-sky-400 text-base sm:text-lg transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-200 hover:text-sky-400 text-base sm:text-lg transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-lg sm:text-xl font-semibold text-sky-300 mb-4 sm:mb-6 tracking-wide">Contact Us</h4>
          <ul className="space-y-3 sm:space-y-4 text-center sm:text-left text-gray-200 text-sm sm:text-base">
            <li>Phone: +91 8750920902</li>
            <li>Email: info@gmtech.com</li>
            <li>Khazoori Khas, Delhi, 110094, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-lg sm:text-xl font-semibold text-sky-300 mb-4 sm:mb-6 tracking-wide">Follow Us</h4>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebookF} className="w-6 sm:w-7 h-6 sm:h-7" />
            </a>
            <a href="#" className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} className="w-6 sm:w-7 h-6 sm:h-7" />
            </a>
            <a href="#" className="text-gray-200 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 sm:w-7 h-6 sm:h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 sm:mt-10 md:mt-12 border-t border-sky-700/50 pt-6 sm:pt-8 text-center">
        <p className="text-gray-300 text-xs sm:text-sm tracking-wide">
          © {new Date().getFullYear()} GM Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
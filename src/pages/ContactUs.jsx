import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="pt-20 sm:pt-28 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-900 tracking-tight">
          Contact Us
        </h1>
        <div className="mt-4 w-24 sm:w-32 mx-auto h-1 bg-gradient-to-r from-sky-600 to-sky-800 rounded-full" />
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Connect with our expert team for tailored solutions and exceptional support.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 text-center mb-6">
            Send a Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-sky-50 border border-sky-200 text-gray-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-sky-50 border border-sky-200 text-gray-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 rounded-xl bg-sky-50 border border-sky-200 text-gray-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-sky-700 to-sky-900 text-white font-semibold rounded-xl shadow-lg hover:from-sky-800 hover:to-sky-950 hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-sky-100 to-white p-6 sm:p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 text-center mb-6">
            Reach Out
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-sky-600" />
              <span className="text-base sm:text-lg">+91 8750920902</span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-sky-600" />
              <span className="text-base sm:text-lg">info@gmtech.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-sky-600" />
              <a
                href="https://wa.me/918750920902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-sky-600 hover:text-sky-800 transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm sm:text-base text-gray-600">
            Khazoori Khas, Delhi, 110094, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
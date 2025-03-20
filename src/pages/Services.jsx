import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCogs,
  faCloud,
  faLock,
  faChartLine,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      title: "Cybersecurity Solutions",
      desc: "Advanced protection against digital threats with real-time monitoring.",
      icon: faShieldAlt,
    },
    {
      title: "IT Consulting",
      desc: "Strategic guidance to optimize your technology infrastructure.",
      icon: faCogs,
    },
    {
      title: "Cloud Services",
      desc: "Scalable, secure cloud solutions for modern businesses.",
      icon: faCloud,
    },
    {
      title: "Data Encryption",
      desc: "Robust encryption to safeguard your sensitive information.",
      icon: faLock,
    },
    {
      title: "Performance Analytics",
      desc: "Actionable insights to boost system efficiency and growth.",
      icon: faChartLine,
    },
    {
      title: "Server Management",
      desc: "Reliable server setup and maintenance for uninterrupted operations.",
      icon: faServer,
    },
  ];

  return (
    <div className="pt-20 sm:pt-28 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-900 tracking-tight">
          Our Premium Services
        </h1>
        <div className="mt-4 w-24 sm:w-32 mx-auto h-1 bg-gradient-to-r from-sky-600 to-sky-800 rounded-full" />
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Tailored solutions designed to elevate your business with unmatched expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8  pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-sky-700"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-sky-600 text-xl sm:text-2xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
import React from "react";

const About = () => {
  return (
    <div className="pt-20 sm:pt-28 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-900 tracking-tight">
          About GM Tech Solutions
        </h1>
        <div className="mt-4 w-24 sm:w-32 mx-auto h-1 bg-gradient-to-r from-sky-600 to-sky-800 rounded-full" />
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We are a premier provider of cybersecurity and IT solutions, dedicated to protecting and empowering businesses in the digital age.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 bg-white rounded-3xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 text-center tracking-tight">
          Our Mission
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
          At GM Tech Solutions, we strive to deliver cutting-edge technology and unwavering support, ensuring your business thrives securely and confidently in an ever-evolving landscape.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-sky-600">∞</span>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 text-center tracking-tight mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Excellence", desc: "Delivering top-tier solutions with precision." },
            { title: "Integrity", desc: "Building trust through transparency and honesty." },
            { title: "Innovation", desc: "Pushing boundaries with forward-thinking technology." },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-100 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
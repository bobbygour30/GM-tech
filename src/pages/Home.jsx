import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import assets from "../assets/assets";

const slides = [
  { image: assets.slider1, text: "Secure Your Future with Elite Cybersecurity", buttonText: "Get Started" },
  { image: assets.slider2, text: "Cutting-Edge IT Solutions for Visionary Businesses", buttonText: "Explore Now" },
  { image: assets.slider3, text: "Unmatched Protection Against Digital Threats", buttonText: "Learn More" },
];

const gallerySlides = [
  { image: assets.slider1 },
  { image: assets.slider2 },
  { image: assets.slider3 },
];

const testimonials = [
  { name: "Jane Doe, CEO of TechCorp", text: "GM Tech redefined our security framework with unparalleled expertise." },
  { name: "Mark Smith, IT Manager", text: "Their innovative solutions are a game-changer—truly exceptional service!" },
  { name: "Emily Johnson, Entrepreneur", text: "Premium security made accessible and effortless for my business." },
];

// Partner logos (SVGs sourced from the web)
const partners = [
  {
    name: "Microsoft",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-centered.svg",
  },
  {
    name: "QuickHeal",
    logo: "https://images.seeklogo.com/logo-png/29/2/quick-heal-logo-png_seeklogo-296886.png",
  },
  {
    name: "Linux",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const galleryTimer = setInterval(() => setCurrentGallerySlide((prev) => (prev + 1) % gallerySlides.length), 2000);
    return () => clearInterval(galleryTimer);
  }, []);

  // Settings for react-slick slider
  const partnerSliderSettings = {
    dots: false, // Hide dots for a cleaner look
    infinite: true, // Seamless looping
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Show 3 slides at a time on large screens
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-scroll
    autoplaySpeed: 2000, // 3 seconds per slide
    arrows: false, // Hide arrows for a minimal design
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Slider Section */}
      <div className="relative mt-12 sm:mt-28 w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover brightness-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-4 sm:p-8 md:p-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl animate-fade-in">
                  {slide.text}
                </h1>
                <a
                  href="/contact"
                  className="inline-block px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-800 rounded-full shadow-2xl hover:from-sky-700 hover:to-sky-900 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-sky-50 rounded-3xl shadow-xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 text-center tracking-wide">
          About GM Tech Solutions
        </h3>
        <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-600" />
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <img
            className="w-full md:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            src={assets.slider2}
            alt="About Us"
          />
          <div className="text-center md:text-left">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-800 mb-4 sm:mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              At GM Tech Solutions, we craft bespoke cybersecurity and IT strategies to fortify businesses in a dynamic digital realm. Our mission is to deliver excellence, resilience, and peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 text-center tracking-wide">
          Our Cybersecurity Portfolio
        </h3>
        <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-600" />
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-8 sm:mt-10 md:mt-12 rounded-3xl shadow-2xl">
          {gallerySlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentGallerySlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img src={slide.image} alt={`Gallery Slide ${index + 1}`} className="w-full h-full object-cover brightness-60" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide drop-shadow-lg">
                  Project Showcase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="bg-gradient-to-r from-sky-50 to-sky-100 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 text-center tracking-wide">
            Our Partners
          </h3>
          <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-600" />
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Slider {...partnerSliderSettings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-4 sm:px-6 flex flex-col items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-contain filter drop-shadow-lg  transition-transform duration-300"
                  />
                  <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-sky-800 text-center">
                    {partner.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-sky-50 to-sky-100 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 text-center tracking-wide">
            Voices of Trust
          </h3>
          <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-600" />
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-sky-600"
              >
                <p className="text-gray-600 text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed">"{testimonial.text}"</p>
                <h4 className="text-sky-800 font-semibold text-lg sm:text-xl tracking-tight">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 text-center tracking-wide">
          Connect With Us
        </h3>
        <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-600" />
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Better yet, see us in person! We cherish our clients and welcome you during business hours.
          </p>
          <p className="text-gray-800 font-medium text-lg sm:text-xl mb-4 sm:mb-6">
            GM Tech Solutions<br />
            Khazoori Khas, Delhi, 110094, India
          </p>
          <p className="text-gray-800 font-medium text-lg sm:text-xl mb-6 sm:mb-8">Phone: 8750920902</p>
          <h4 className="text-xl sm:text-2xl font-semibold text-sky-800 mb-4 sm:mb-6 tracking-tight">
            Reach Out via WhatsApp
          </h4>
          <a
            href="https://wa.me/918750920902"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-2xl hover:from-green-600 hover:to-green-800 hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 sm:w-7 h-6 sm:h-7 mr-2 sm:mr-3" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Online Appointment Section */}
      <div className="bg-gradient-to-r from-sky-800 to-sky-900 py-10 sm:py-12 md:py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide">
            Schedule Your Consultation
          </h3>
          <hr className="mt-4 sm:mt-6 w-24 sm:w-32 mx-auto border-t-2 sm:border-t-3 border-sky-400" />
          <form className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-md sm:max-w-lg md:max-w-xl mx-auto space-y-6 sm:space-y-8 bg-sky-900/50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 sm:p-5 rounded-xl bg-sky-800/70 text-white placeholder-gray-300 border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 sm:p-5 rounded-xl  bg-sky-800/70 text-white placeholder-gray-300 border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="date"
                className="w-full p-4 sm:p-5 rounded-xl bg-sky-800/70 text-white border border-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 sm:py-5 bg-gradient-to-r from-sky-600 to-sky-800 text-white font-semibold rounded-xl shadow-2xl hover:from-sky-700 hover:to-sky-900 hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
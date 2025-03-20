import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import { Routes , Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

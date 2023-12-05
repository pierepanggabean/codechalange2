import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Business from "../components/Business";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <Hero />
        <div className="banner"></div>
      </section>
      <Business />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;

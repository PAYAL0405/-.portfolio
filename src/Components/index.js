import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Biography from "./Biography";
import Service from "./Service";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";
import TestimonialSlider from "./TestimonialSlider";
import Contact from "./Contact";
import Footer from "./Footer";

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Biography />
      <Service />
      <Skills />
      <Projects />
      <Achievements />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeMain;

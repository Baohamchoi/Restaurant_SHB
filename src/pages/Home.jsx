import React from "react";
import Hero from "../components/home/Hero";
import PopularDishes from "../components/home/PopularDishes";
import Services from "../components/home/Services";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import Reservation from "../components/home/Reservation";
import Features from "../components/home/Features";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Features />
      <PopularDishes />
      <Services />
      <AboutSection />
      <BlogSection />
      <div id="reservation">
        <Reservation />
      </div>
    </div>
  );
};

export default Home;

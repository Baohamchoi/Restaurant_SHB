import React from "react";
import Hero from "../components/home/Hero";
import PopularDishes from "../components/home/PopularDishes";
import Services from "../components/home/Services";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import Reservation from "../components/home/Reservation";
import Features from "../components/home/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PopularDishes />
      <Services />
      <AboutSection />
      <BlogSection />
      <Reservation />
    </div>
  );
};

export default Home;

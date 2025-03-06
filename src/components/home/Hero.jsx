import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../images/home/hero.png"; // Ảnh 1
import image2 from "../../images/home/floating1.png"; // Ảnh 2
import image3 from "../../images/home/floating2.png"; // Ảnh 3

const Hero = () => {
  const images = [heroImage, image2, image3]; // Danh sách ảnh
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển ảnh mỗi 1 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 1000ms = 1s
    return () => clearInterval(interval); // Cleanup khi component unmount
  }, [images.length]);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-amber-100 to-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text */}
        <div className="space-y-8 z-10 animate-in fade-in slide-in-from-left-20 duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Welcome to <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              RestoNest
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md font-medium">
            Discover a world of flavors with our carefully crafted dishes, made
            from the freshest ingredients to elevate your dining experience.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-amber-500 hover:to-amber-700 shadow-md"
          >
            Explore Menu
          </Link>
        </div>

        {/* Right Section: Carousel with Dots */}
        <div className="relative z-10">
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-[450px] border border-amber-200/50">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-amber-500 scale-150 shadow-md"
                    : "bg-amber-300/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-200/10 via-transparent to-amber-300/10 z-0"></div>
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Hero;
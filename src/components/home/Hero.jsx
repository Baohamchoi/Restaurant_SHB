import React, { useState, useEffect } from 'react';
import home1 from '../../images/home/home1.png';
import home2 from '../../images/home/home2.png';
import home3 from '../../images/home/home3.png';

function Hero() {
  const images = [home1, home2, home3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div>
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-20 bg-gradient-to-r from-black via-black/95 ">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Experience
              <span className="block mt-2 text-7xl lg:text-8xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Culinary
              </span>
              <span className="block text-7xl lg:text-8xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md font-medium">
            Discover a world of flavors with our carefully crafted dishes, made
            from the freshest ingredients to elevate your dining experience.
            </p>
            <div className="mt-10 flex flex-row gap-4">
              <button className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Reserve Table
              </button>
              <button className="px-8 py-4 border-2  text-white font-semibold rounded-full hover:bg-white/10 transform transition-all duration-300">
                View Menu
              </button>
            </div>
            <div className="mt-16 flex space-x-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-amber-500 scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/40 lg:from-transparent lg:via-black/20 lg:to-black/40" />
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

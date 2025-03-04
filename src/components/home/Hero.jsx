import React from "react";
import a from "../../images/Image.png";

const Hero = () => {
  return (
    <div className="bg-amber-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <br />
            <span className="text-amber-500">Resto</span>
            <span className="text-amber-700">Nest</span>
          </h1>
          <p className="text-gray-700 mb-8">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy.
          </p>
          <button className="bg-black text-white hover:bg-gray-800 font-medium py-3 px-8 rounded-md">
            View Menu
          </button>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden ">
            <img
              src={a}
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 left-0 bottom-0 z-0">
            <svg
              className="absolute top-0 right-0"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M20,50 Q40,20 60,40 T100,30 T140,40 T180,30"
                stroke="#9CA3AF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="10 5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { FaUtensils, FaTruck, FaLeaf } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-amber-600">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <FeatureCard
            icon={<FaUtensils size={24} />}
            title="Quality Food"
            description="We use only the finest ingredients to prepare our delicious meals."
          />
          <FeatureCard
            icon={<FaTruck size={24} />}
            title="Fast Delivery"
            description="Quick and reliable delivery service to your doorstep."
          />
          <FeatureCard
            icon={<FaLeaf size={24} />}
            title="Healthy Options"
            description="Variety of healthy and nutritious options for health-conscious customers."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
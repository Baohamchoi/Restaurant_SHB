import React from "react";
import { FaUtensils, FaTruck, FaLeaf } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg shadow-md text-center overflow-hidden">
      <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
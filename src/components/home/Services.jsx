import React from "react";
import { FaUtensils, FaWineGlassAlt, FaConciergeBell } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 group">
      <div className="text-amber-500 mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-amber-400">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white transition-colors duration-300 hover:text-amber-400">
          Our Best Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <ServiceCard
            icon={<FaUtensils size={32} />}
            title="Fine Dining"
            description="Experience our exquisite menu prepared by award-winning chefs."
          />
          <ServiceCard
            icon={<FaWineGlassAlt size={32} />}
            title="Premium Bar"
            description="Enjoy our selection of fine wines and craft cocktails."
          />
          <ServiceCard
            icon={<FaConciergeBell size={32} />}
            title="Private Events"
            description="Host your special occasions in our elegant private dining rooms."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
import React from "react";
import { Link } from "react-router-dom";

const DishCard = ({ dish }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800 transition-colors duration-300 hover:text-amber-600">
          {dish.name}
        </h3>
        <p className="text-gray-500 mb-2 font-medium">${dish.price.toFixed(2)}</p>
        <Link
          to={`/menu/${dish.id}`}
          className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-amber-400 hover:to-amber-500 shadow-md"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default DishCard;
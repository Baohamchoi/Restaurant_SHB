import React from "react";
import { Link } from "react-router-dom";

const DishCard = ({ dish }) => {
  return (
    <div className="card">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
        <p className="text-gray-500 mb-2">${dish.price.toFixed(2)}</p>
        <Link to={`/menu/${dish.id}`} className="btn btn-primary inline-block">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default DishCard;

import React from "react";
import { dishes } from "../../data/dishes";
import { Link } from "react-router-dom";

const DishCard = ({ image, title, price, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden duration-300 hover:-translate-y-2">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-amber-600 font-bold">${price}</span>
          <Link
            to={`/menu/${id}`}
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 hover:from-amber-400 hover:to-amber-500"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularDishes = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Popular Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.slice(0, 3).map((dish) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              image={dish.image}
              title={dish.name}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
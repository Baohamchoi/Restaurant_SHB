import React from 'react'

const DishCard = ({ imagePlaceholder, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Placeholder - Replace with your own image */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${price}</span>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  )
}

const PopularDishes = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Popular Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DishCard 
            imagePlaceholder="dish1.jpg"
            title="Grilled Salmon"
            price="24.99"
          />
          <DishCard 
            imagePlaceholder="dish2.jpg"
            title="Beef Burger"
            price="14.99"
          />
          <DishCard 
            imagePlaceholder="dish3.jpg"
            title="Pasta Carbonara"
            price="18.99"
          />
        </div>
        <div className="text-center mt-10">
          <button className="btn btn-primary">View All Menu</button>
        </div>
      </div>
    </div>
  )
}

export default PopularDishes
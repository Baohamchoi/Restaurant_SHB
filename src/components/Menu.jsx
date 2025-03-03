import React from 'react'
import { FaSearch } from 'react-icons/fa'

const MenuItem = ({ imagePlaceholder, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Placeholder - Replace with your own image */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${price}</span>
          <button className="btn btn-primary text-sm">Order Now</button>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-8">Popular Dishes</h1>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <button className="bg-primary text-white px-4 py-2 rounded-full">All</button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">Breakfast</button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">Lunch</button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">Dinner</button>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuItem 
            imagePlaceholder="dish1.jpg"
            title="Grilled Salmon"
            price="24.99"
          />
          <MenuItem 
            imagePlaceholder="dish2.jpg"
            title="Beef Burger"
            price="14.99"
          />
          <MenuItem 
            imagePlaceholder="dish3.jpg"
            title="Pasta Carbonara"
            price="18.99"
          />
          <MenuItem 
            imagePlaceholder="dish4.jpg"
            title="Chicken Curry"
            price="16.99"
          />
          <MenuItem 
            imagePlaceholder="dish5.jpg"
            title="Vegetable Stir Fry"
            price="12.99"
          />
          <MenuItem 
            imagePlaceholder="dish6.jpg"
            title="Seafood Paella"
            price="22.99"
          />
          <MenuItem 
            imagePlaceholder="dish7.jpg"
            title="Classic Cheeseburger"
            price="13.99"
          />
          <MenuItem 
            imagePlaceholder="dish8.jpg"
            title="BBQ Ribs"
            price="19.99"
          />
          <MenuItem 
            imagePlaceholder="dish9.jpg"
            title="Mushroom Burger"
            price="15.99"
          />
          <MenuItem 
            imagePlaceholder="dish10.jpg"
            title="Pancake Stack"
            price="9.99"
          />
          <MenuItem 
            imagePlaceholder="dish11.jpg"
            title="Shrimp Pasta"
            price="20.99"
          />
          <MenuItem 
            imagePlaceholder="dish12.jpg"
            title="Double Cheeseburger"
            price="17.99"
          />
          <MenuItem 
            imagePlaceholder="dish13.jpg"
            title="Steak Sandwich"
            price="16.99"
          />
          <MenuItem 
            imagePlaceholder="dish14.jpg"
            title="Chicken Burger"
            price="14.99"
          />
          <MenuItem 
            imagePlaceholder="dish15.jpg"
            title="Veggie Burger"
            price="13.99"
          />
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
              &lt;
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
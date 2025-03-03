import React from 'react'

const AboutSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Serve</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, RESTO has been serving delicious meals made with the freshest ingredients. 
              Our chefs are passionate about creating memorable dining experiences for our guests.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span>Quality Food</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span>Fresh Ingredients</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span>Expert Chefs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span>Diverse Menu</span>
              </div>
            </div>
            <button className="btn btn-primary">Learn More</button>
          </div>
          
          {/* Image Placeholder - Replace with your own image */}
          <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
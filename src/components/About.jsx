import React from 'react'
import { FaUtensils, FaLeaf, FaWineGlassAlt, FaCoffee } from 'react-icons/fa'

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="text-center p-4">
      <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
        <span className="text-primary">{icon}</span>
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}

const ChefCard = ({ imagePlaceholder, name, role }) => {
  return (
    <div className="text-center">
      {/* Chef Image Placeholder */}
      <div className="bg-gray-300 h-48 w-48 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-gray-500">Chef Image</span>
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

const GalleryImage = () => {
  return (
    <div className="bg-gray-300 h-40 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Gallery Image</span>
    </div>
  )
}

const About = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-black opacity-70">
          {/* This div is for the dark overlay on the image */}
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Quality and Tradition</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We are dedicated to providing an exceptional dining experience with the finest ingredients and traditional recipes.
          </p>
          <button className="btn btn-primary">Explore Menu</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureItem 
              icon={<FaUtensils size={24} />} 
              title="Quality Food" 
            />
            <FeatureItem 
              icon={<FaLeaf size={24} />} 
              title="Organic Ingredients" 
            />
            <FeatureItem 
              icon={<FaWineGlassAlt size={24} />} 
              title="Fine Dining" 
            />
            <FeatureItem 
              icon={<FaCoffee size={24} />} 
              title="Premium Service" 
            />
          </div>
        </div>
      </div>

      {/* Restaurant Info Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Restaurant Image</span>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, RESTO has been serving delicious meals made with the freshest ingredients. 
                Our chefs are passionate about creating memorable dining experiences for our guests.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in using only the highest quality ingredients, sourced locally whenever possible, 
                to create dishes that delight our customers and keep them coming back for more.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Chefs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Professional Chefs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ChefCard 
              imagePlaceholder="chef1.jpg"
              name="John Doe"
              role="Executive Chef"
            />
            <ChefCard 
              imagePlaceholder="chef2.jpg"
              name="Jane Smith"
              role="Pastry Chef"
            />
            <ChefCard 
              imagePlaceholder="chef3.jpg"
              name="Michael Brown"
              role="Sous Chef"
            />
            <ChefCard 
              imagePlaceholder="chef4.jpg"
              name="Sarah Johnson"
              role="Head Chef"
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">View Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
          </div>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="relative py-16">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gray-900 opacity-80">
          {/* This div is for the dark overlay on the image */}
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Make a Reservation</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Time</label>
                <input 
                  type="time" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-primary hover:bg-amber-600 text-white px-8 py-3 rounded font-medium">
                  Book a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
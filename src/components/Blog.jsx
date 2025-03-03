import React from 'react'

const BlogCard = ({ imagePlaceholder, date, title, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Placeholder - Replace with your own image */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-semibold my-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-primary font-medium hover:underline">Read More</a>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <div className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            imagePlaceholder="blog1.jpg"
            date="June 15, 2023"
            title="The Art of Cooking Perfect Steaks"
            excerpt="Learn the secrets to cooking the perfect steak from our expert chefs."
          />
          <BlogCard 
            imagePlaceholder="blog2.jpg"
            date="May 28, 2023"
            title="Seasonal Ingredients for Summer"
            excerpt="Discover the best seasonal ingredients to use in your summer recipes."
          />
          <BlogCard 
            imagePlaceholder="blog3.jpg"
            date="April 10, 2023"
            title="Wine Pairing Essentials"
            excerpt="Master the basics of wine pairing to enhance your dining experience."
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
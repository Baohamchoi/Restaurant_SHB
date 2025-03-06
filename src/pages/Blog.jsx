import React from 'react';

import blog1 from '../images/Blog/blog1.jpg'; 
import blog2 from '../images/Blog/blog2.jpg'; 
import blog3 from '../images/Blog/blog3.jpg'; 

const BlogCard = ({ imagePlaceholder, date, title, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Placeholder with lazy loading */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <img 
          src={imagePlaceholder} 
          alt="Blog Image" 
          className="w-full h-full object-fit-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-semibold my-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-primary font-medium hover:underline">Read More</a>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    { image: blog1, date: "June 15, 2023", title: "The Art of Cooking Perfect Steaks", excerpt: "Learn the secrets to cooking the perfect steak from our expert chefs." },
    { image: blog2, date: "May 28, 2023", title: "Seasonal Ingredients", excerpt: "Discover the best seasonal ingredients to use in your summer recipes." },
    { image: blog3, date: "April 10, 2023", title: "Wine Pairing Essentials", excerpt: "Master the basics of wine pairing to enhance your dining experience." }
  ];

  return (
    <div className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              imagePlaceholder={post.image} 
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

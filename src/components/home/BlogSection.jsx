import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/home/blog1.png";
import image2 from "../../images/home/blog2.png";

const BlogCard = ({ imagePlaceholder, date, title, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imagePlaceholder}
        alt="imagePlaceholder"
        className="h-48 bg-gray-300 flex items-center justify-center w-full"
      />
      <div className="p-4">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-semibold my-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to={`/blog`} className="text-primary font-medium hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get The Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlogCard
            imagePlaceholder={image1}
            date="June 15, 2023"
            title="The Art of Cooking Perfect Steaks"
            excerpt="Learn the secrets to cooking the perfect steak from our expert chefs."
          />
          <BlogCard
            imagePlaceholder={image2}
            date="May 28, 2023"
            title="Seasonal Ingredients for Summer"
            excerpt="Discover the best seasonal ingredients to use in your summer recipes."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

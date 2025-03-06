import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/home/blog1.png";
import image2 from "../../images/home/blog2.png";

const BlogCard = ({ imagePlaceholder, date, title, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div>
        <img
          src={imagePlaceholder}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">
          {date}
        </span>
        <h3 className="text-xl font-semibold my-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
        <Link
          to="/blog"
          className="duration-300 hover:text-amber-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Get The Latest News
        </h2>
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
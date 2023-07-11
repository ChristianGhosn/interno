import React from "react";
import "./blog.css";
import BlogCard from "../blogCard/BlogCard";

const Blog = ({ blogs }) => {
  return (
    <div className="blog">
      <div className="blog_heading">
        <h1 className="heading-1">Articles & News</h1>
        <p className="paragraph">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div className="blog_content">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              heading={blog.heading}
              date={blog.date}
              image={blog.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import "./blogCard.css";
import { chevronRight } from "../../assets";

const BlogCard = ({ heading, date, image }) => {
  return (
    <div className="blogCard">
      <div className="blogCard_img">
        <img src={image} alt={heading} />
      </div>
      <div className="blogCard_content">
        <div className="blogCard_content_text">
          <h5 className="heading-5">{heading}</h5>
          <p className="text">{date}</p>
        </div>
        <img src={chevronRight} alt="Blog Article Read More" />
      </div>
    </div>
  );
};

export default BlogCard;

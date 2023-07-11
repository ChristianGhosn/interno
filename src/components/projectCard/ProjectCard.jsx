import React from "react";
import "./projectCard.css";
import { chevronRight } from "../../assets";

const ProjectCard = ({ image, heading, text }) => {
  return (
    <div className="projectCard">
      <div className="projectCard_img">
        <img src={image} alt={heading} />
      </div>
      <div className="projectCard_content">
        <div className="projectCard_content_text">
          <h5 className="heading-5">{heading}</h5>
          <p className="text">{text}</p>
        </div>
        <img src={chevronRight} alt="Chevron Right - read more" />
      </div>
    </div>
  );
};

export default ProjectCard;

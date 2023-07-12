import React from "react";
import "./howWeWorkCard.css";

const HowWeWorkCard = ({
  imageSrc,
  icon,
  headingNum,
  heading,
  text,
  className,
}) => {
  return (
    <div className={className ? `${className} howWeWorkCard` : "howWeWorkCard"}>
      <div
        className="howWeWorkCard_img"
        style={{ backgroundImage: `url(src/assets/${imageSrc})` }}
      />
      <div className="howWeWorkCard_content">
        <div className="howWeWorkCard_content_upper">
          <img src={icon} alt="clipboard icon" />
          <h1 className="display_text text-white">{headingNum}</h1>
        </div>
        <div className="howWeWorkCard_content_lower">
          <h3 className="heading-3">{heading}</h3>
          <p className="paragraph">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkCard;

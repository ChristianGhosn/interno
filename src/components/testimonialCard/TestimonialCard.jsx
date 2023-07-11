import React from "react";
import "./testimonialCard.css";

const TestimonialCard = ({ image, name, location, text }) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard_profile">
        <div className="testimonialCard_profile-img">
          <img src={image} alt={`${name} testimonial`} />
        </div>
        <div className="testimonialCard_profile_details">
          <h4 className="heading-4">{name}</h4>
          <p className="text">{location}</p>
        </div>
      </div>
      <p className="paragraph">{text}</p>
    </div>
  );
};

export default TestimonialCard;

import React from "react";
import "./testimonials.css";
import TestimonialCard from "../testimonialCard/TestimonialCard";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h1 className="heading-1">What People Think About Us</h1>
      <div className="testimonials_cards">
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;

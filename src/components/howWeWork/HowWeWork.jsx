import React from "react";
import "./howWeWork.css";

import HowWeWorkCard from "../howWeWorkCard/HowWeWorkCard";

const HowWeWork = ({ howWeWork }) => {
  return (
    <div className="howWeWork">
      <div className="howWeWork_heading">
        <h2 className="heading-2">How We Work</h2>
        <p className="paragraph">
          It is a long established fact will be distracted. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="howWeWork_content">
        {howWeWork.map((item, index) => {
          return (
            <HowWeWorkCard
              key={index}
              imageSrc={item.imageSrc}
              icon={item.icon}
              headingNum={item.headingNum}
              heading={item.heading}
              text={item.text}
              className={(index + 1) % 2 === 0 ? "reverse" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HowWeWork;

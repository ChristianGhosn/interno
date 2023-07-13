import React from "react";
import "./aboutWork.css";
import Button from "../button/Button";

const AboutWork = ({ aboutWork }) => {
  return (
    <div className="aboutUs_aboutWork">
      {aboutWork.map((item, index) => {
        return (
          <div
            className={
              (index + 1) % 2 === 0 ? `reverse aboutWork` : "aboutWork"
            }
            key={index}
          >
            <div className="aboutWork_content">
              <h1 className="heading-1">{item.heading}</h1>
              <p className="paragraph">{item.text}</p>
              <Button label={item.buttonText} type="button" />
            </div>
            <div
              className="aboutWork_img"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AboutWork;

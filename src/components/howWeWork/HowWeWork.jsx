import React from "react";
import "./howWeWork.css";

import HowWeWorkCard from "../howWeWorkCard/HowWeWorkCard";

import { clipboard, stationary, house, climb } from "../../assets";

const constants = {
  howWeWork: [
    {
      imageSrc: "howWeWork1.jpg",
      icon: clipboard,
      headingNum: "01",
      heading: "Concept & Details",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imageSrc: "howWeWork2.jpg",
      icon: stationary,
      headingNum: "02",
      heading: "Idea for Work",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imageSrc: "howWeWork3.jpg",
      icon: house,
      headingNum: "03",
      heading: "Design",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      imageSrc: "howWeWork4.jpg",
      icon: climb,
      headingNum: "04",
      heading: "Perfection",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
  ],
};

const HowWeWork = () => {
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
        {constants.howWeWork.map((item, index) => {
          console.log((index + 1) % 2);
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

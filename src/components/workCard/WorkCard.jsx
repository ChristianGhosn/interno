import React from "react";
import "./workCard.css";
import Button from "../button/Button";

const WorkCard = ({ title, text }) => {
  return (
    <div className="workCard">
      <h4 className="heading-4">{title}</h4>
      <p className="text">{text}</p>
      <Button type="button" label="Read More" className="btn-white btn-sm" />
    </div>
  );
};

export default WorkCard;

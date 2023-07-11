import React from "react";
import "./button.css";
import { BsArrowRightShort } from "react-icons/bs";

const Button = ({ type, className, label }) => {
  return (
    <button type={type} className={`btn ${className}`}>
      {label}
      <BsArrowRightShort
        size={40}
        color={className === "btn-primary" ? "#292f36" : "#cda274"}
      />
    </button>
  );
};

export default Button;

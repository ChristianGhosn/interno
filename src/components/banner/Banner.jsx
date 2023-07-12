import React from "react";
import "./banner.css";

const Banner = ({ image, heading, parent, child }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(assets/${image})` }}>
      <div className="banner_div">
        <h1 className="heading-1">{heading}</h1>
        <p className="text">
          {parent} / {child}
        </p>
      </div>
    </div>
  );
};

export default Banner;

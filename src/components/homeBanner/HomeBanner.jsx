import React from "react";
import "./homeBanner.css";

import Button from "../button/Button";

const HomeBanner = () => {
  return (
    <div className="banner-img">
      <div className="banner-content">
        <h1 className="heading-1">Let Your Home Be Unique</h1>
        <p className="text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <Button type="button" className="" label="Get Free Estimate" />
      </div>
    </div>
  );
};

export default HomeBanner;

import React from "react";

import "./pageNotFound.css";
import { error } from "../../assets";

const PageNotFound = () => {
  return (
    <div className="error container-wrapper">
      <div className="error_content">
        <h1 className="display_text text-tan">404</h1>
        <p className="text">
          We are sorry, but the page you requested was not found
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${error})` }}
        className="error_img"
      ></div>
    </div>
  );
};

export default PageNotFound;

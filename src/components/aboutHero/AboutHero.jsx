import React from "react";
import "./aboutHero.css";
import Button from "../button/Button";
import { callIcon, kitchen } from "../../assets";

const AboutHero = () => {
  return (
    <div className="aboutHero">
      <div className="aboutHero_content">
        <h1 className="heading-1">
          We Create The Art Of Stylish Living Stylishly
        </h1>
        <p className="paragraph">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="aboutHero-contact">
          <img src={callIcon} alt="call icon" />
          <div>
            <h5 className="heading-5">
              <a href="tel:012345678">012345678</a>
            </h5>
            <p className="text">Call Us Anytime</p>
          </div>
        </div>
        <Button className="btn-sm" type="button" label="Get Free Estimate" />
      </div>
      <div className="aboutHero_img">
        <img src={kitchen} alt="About Us Kitchen" />
      </div>
    </div>
  );
};

export default AboutHero;

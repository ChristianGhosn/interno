import React from "react";
import "./services.css";

import { Contact, Banner, WorkCard, HowWeWork } from "../../components";

import constants from "./constants";
import { article3 } from "../../assets";

const Services = () => {
  return (
    <div className="container-wrapper">
      <Banner
        image={article3}
        heading="Services"
        parent="Home"
        child="Services"
      />
      <div className="services_work">
        {constants.work.map((item, index) => {
          return <WorkCard title={item.title} text={item.text} key={index} />;
        })}
      </div>
      <HowWeWork howWeWork={constants.howWeWork} />
      <Contact />
    </div>
  );
};

export default Services;

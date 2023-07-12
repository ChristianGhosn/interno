import React from "react";
import "./services.css";

import { Contact, Banner, WorkCard, HowWeWork } from "../../components";

const constants = {
  work: [
    {
      title: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Retail Design",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "2D/3D Art Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Decoration Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ],
};

const Services = () => {
  return (
    <div className="container-wrapper">
      <Banner
        image="article3.jpg"
        heading="Services"
        parent="Home"
        child="Services"
      />
      <div className="services_work">
        {constants.work.map((item, index) => {
          return <WorkCard title={item.title} text={item.text} key={index} />;
        })}
      </div>
      <HowWeWork />
      <Contact />
    </div>
  );
};

export default Services;

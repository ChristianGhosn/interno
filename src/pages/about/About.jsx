import React from "react";
import "./about.css";
import {
  Banner,
  Quote,
  AboutWork,
  AboutPeople,
  MailBox,
} from "../../components";
import { article1 } from "../../assets";
import constants from "./constants";

const About = () => {
  return (
    <div className="container-wrapper aboutUs">
      <Banner
        image={article1}
        heading="About Us"
        parent="Home"
        child="About Us"
      />
      <Quote quote={constants.quote.quote} author={constants.quote.author} />
      <AboutWork aboutWork={constants.aboutWork} />
      <AboutPeople peopleCards={constants.peopleCards} />
      <MailBox />
    </div>
  );
};

export default About;

import React from "react";
import "./home.css";
import constants from "./constants";

import {
  AboutHero,
  Blog,
  Banner,
  ClientLogos,
  Counter,
  FollowProjects,
  Testimonials,
  WorkCard,
  Contact,
} from "../../components";

const Home = () => {
  return (
    <div className="container-wrapper">
      <Banner />
      <div className="home_work">
        {constants.work.map((item, index) => {
          return <WorkCard title={item.title} text={item.text} key={index} />;
        })}
      </div>
      <AboutHero />
      <Testimonials testimonials={constants.testimonials} />
      <ClientLogos brands={constants.brands} />
      <FollowProjects projects={constants.projects} />
      <Counter />
      <Blog blogs={constants.blogs} />
      <Contact />
    </div>
  );
};

export default Home;

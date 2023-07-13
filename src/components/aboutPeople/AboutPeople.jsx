import React from "react";
import "./aboutPeople.css";
import PeopleCard from "../peopleCard/PeopleCard";

const AboutPeople = ({ peopleCards }) => {
  return (
    <div className="aboutPeople">
      <div className="aboutPeople_heading">
        <h1 className="heading-1">What People Think About Us</h1>
      </div>
      <div className="aboutPeople_content">
        {peopleCards.map((item, index) => {
          return (
            <PeopleCard
              key={index}
              image={item.image}
              name={item.name}
              position={item.position}
              socials={item.socials}
              mobile={item.mobile}
              email={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutPeople;

import React, { useState } from "react";
import "./peopleCard.css";
import { facebook, linkedin, insta, twitter } from "../../assets";

const PeopleCard = ({ image, name, position, socials, mobile, email }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="peopleCard"
      style={!toggle ? { backgroundImage: `url(${image})` } : {}}
      onClick={(e) => {
        setToggle((prev) => !prev);
      }}
    >
      {toggle && (
        <div className="peopleCard_text">
          <div className="peopleCard_text_upper">
            <h3 className="heading-3">{name}</h3>
            <p className="text">{position}</p>
          </div>
          <div className="peopleCard_text_socials">
            <a href={socials.facebook}>
              <img src={facebook} alt="Facebook Social" />
            </a>
            <a href={socials.twitter}>
              <img src={twitter} alt="twitter Social" />
            </a>
            <a href={socials.insta}>
              <img src={insta} alt="insta Social" />
            </a>
            <a href={socials.linkedin}>
              <img src={linkedin} alt="linkedin Social" />
            </a>
          </div>
          <div className="peopleCard_text_lower">
            <p className="text">{mobile}</p>
            <p className="text">{email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleCard;

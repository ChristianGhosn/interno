import React from "react";
import "./footer.css";

import {
  logoLarge,
  facebook,
  insta,
  twitter,
  linkedin,
} from "../../assets/index";
import { Link } from "react-router-dom";

const content = [
  {
    title: "Pages",
    links: [
      { title: "About Us", link: "/interno/about-us" },
      { title: "Our Projects", link: "/interno/projects" },
      { title: "Our Team", link: "/interno/team" },
      { title: "Contact Us", link: "/interno/contact-us" },
      { title: "Services", link: "/interno/services" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Kitchen", link: "/interno/kitchen" },
      { title: "Living Area", link: "/interno/living-area" },
      { title: "Bathroom", link: "/interno/bathroom" },
      { title: "Dining Hall", link: "/interno/dining" },
      { title: "Bedroom", link: "/interno/bedroom" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "55 Birchwood Ave, Deerfield, IL 60015, USA",
        link: "https://goo.gl/maps/AYNZUuNy1EdrsSnB6",
      },
      { title: "contact@interno.com", link: "mailto:contact@interno.com" },
      { title: "(123) 456 - 7890", link: "tel:(123) 456 - 7890" },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="container-wrapper footer">
        <div className="main">
          <Link to="/interno/">
            <img src={logoLarge} alt="logo" className="logo" />
          </Link>
          <p className="text">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="footer-socials">
            <img src={facebook} alt="facebook social" />
            <img src={twitter} alt="twitter social" />
            <img src={linkedin} alt="linkedin social" />
            <img src={insta} alt="insta social" />
          </div>
        </div>
        {content.map((column, index) => {
          return (
            <div className="footer-col" key={index}>
              <h4 className="heading-4">{column.title}</h4>
              {column.links.map((link, index) => {
                return (
                  <Link to={link.link} className="text link" key={index}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </footer>
      <p className="text text-center">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </div>
  );
};

export default Footer;

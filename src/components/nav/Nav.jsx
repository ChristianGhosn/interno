import React, { useState } from "react";
import "./nav.css";
import { logoLarge } from "../../assets/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", link: "/interno/" },
  { title: "Pages", link: "/interno/pages" },
  { title: "Services", link: "/interno/services" },
  { title: "Project", link: "/interno/project" },
  { title: "Blog", link: "/interno/blog" },
  { title: "Contact", link: "/interno/contact" },
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav className="container-wrapper nav">
      <Link to="/interno/">
        <img src={logoLarge} alt="logo" className="logo" />
      </Link>
      <ul className={toggleSearch ? "w-half nav-list" : "nav-list"}>
        {toggleSearch ? (
          <form className="nav-search-form">
            <input type="text" className="text-input" placeholder="Search..." />
          </form>
        ) : (
          navItems.map((item, index) => {
            return (
              <li className="link text" key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })
        )}
        {!toggleSearch && (
          <BsSearch
            size={25}
            className="nav-search-button"
            onClick={() => {
              setToggleSearch(true);
            }}
          />
        )}
        {toggleSearch && (
          <AiOutlineClose
            size={30}
            fill={"#4d5053"}
            className="nav-search-cancel"
            onClick={() => {
              setToggleSearch(false);
            }}
          />
        )}
      </ul>
      <div className="nav-smscreen">
        {toggleSearch ? (
          <form className="nav-search-form">
            <input type="text" className="text-input" placeholder="Search..." />
          </form>
        ) : (
          <GiHamburgerMenu
            size={30}
            fill={"#4d5053"}
            onClick={() => {
              setToggle(true);
            }}
          />
        )}
        {!toggleSearch && (
          <BsSearch
            size={25}
            className="nav-search-button"
            onClick={() => {
              setToggleSearch(true);
            }}
          />
        )}
        {toggleSearch && (
          <AiOutlineClose
            size={30}
            fill={"#4d5053"}
            className="nav-search-cancel"
            onClick={() => {
              setToggleSearch(false);
            }}
          />
        )}
      </div>
      {toggle && (
        <div className="nav-smscreen-overlay">
          <AiOutlineClose
            size={30}
            fill={"#4d5053"}
            onClick={() => {
              setToggle(false);
            }}
            className="overlay-close"
          />
          <ul className="smscreen-nav-list">
            {navItems.map((item, index) => {
              return (
                <li className="link text" key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

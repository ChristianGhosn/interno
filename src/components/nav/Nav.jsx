import React, { useState } from "react";
import "./nav.css";
import { logoLarge } from "../../assets/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Pages", link: "/pages" },
  { title: "Services", link: "/services" },
  { title: "Project", link: "/project" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav className="container-wrapper nav">
      <img src={logoLarge} alt="logo" className="logo" />
      <ul className={toggleSearch ? "w-half nav-list" : "nav-list"}>
        {toggleSearch ? (
          <form className="nav-search-form">
            <input type="text" className="text-input" placeholder="Search..." />
          </form>
        ) : (
          navItems.map((item, index) => {
            return (
              <li className="link text" key={index}>
                <a href={item.link}>{item.title}</a>
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
                  <a href={item.link}>{item.title}</a>
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

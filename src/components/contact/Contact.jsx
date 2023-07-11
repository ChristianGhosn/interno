import React from "react";
import "./contact.css";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div className="contact_div">
      <h1 className="heading-1 text-white">Want to Join the Interno</h1>
      <p className="text text-white">
        It is a long established fact will be distracted.
      </p>
      <Button label="Contact Us" className="btn-primary" type="button" />
    </div>
  );
};

export default Contact;

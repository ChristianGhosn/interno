import React from "react";
import "./mailBox.css";
import Button from "../button/Button";

const MailBox = () => {
  return (
    <div className="mailBox">
      <h1 className="heading-1">Got an Idea? Let's Chat.</h1>
      <form className="mailBox_form">
        <div className="mailBox_form_upper">
          <input type="text" placeholder="Name" className="text-input" />
          <input type="text" placeholder="Email" className="text-input" />
        </div>
        <textarea placeholder="I'm interested in..." className="text-input" />
        <Button label="Send Now" type="submit" className="btn-sm" />
      </form>
    </div>
  );
};

export default MailBox;

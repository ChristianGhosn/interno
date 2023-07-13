import React from "react";
import "./quote.css";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <div className="quoteCard">
        <h1 className="display_text">“</h1>
        <h4>{quote}</h4>
        <p className="text">-{author}</p>
      </div>
    </div>
  );
};

export default Quote;

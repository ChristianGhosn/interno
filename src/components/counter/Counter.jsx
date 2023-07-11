import React from "react";
import "./counter.css";

const constants = [
  { num: 12, text: "Years of Experience" },
  { num: 85, text: "Successful Projects" },
  { num: 15, text: "Active Projects" },
  { num: 95, text: "Happy Customers" },
];

const Counter = () => {
  return (
    <div className="counter">
      {constants.map((item, index) => {
        return (
          <div
            className={
              constants.length - 1 === index
                ? `counter_div border-none`
                : `counter_div`
            }
            key={index}
          >
            <h1 className="heading-1 text-tan">{item.num}</h1>
            <p className="text">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;

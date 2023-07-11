import React from "react";
import "./clientLogos.css";

const ClientLogos = ({ brands }) => {
  return (
    <div className="clientLogos">
      {brands.map((brand, index) => {
        return <img src={brand} alt={brand} key={index} />;
      })}
    </div>
  );
};

export default ClientLogos;

import React from "react";

const Card = ({ title, button }) => {
  return (
    <div className="card">
      <h2>
        {title}: <span>₹4500</span>
      </h2>
      <button>{button}</button>
    </div>
  );
};

export default Card;

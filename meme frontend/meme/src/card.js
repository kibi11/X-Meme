import React from "react";
import "./card.css";

export default function MemeCard({ author, caption, link }) {
  console.log(link);
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={link} />
      </div>
      <div className="cardMessage">
        <h3>{caption}</h3>
      </div>
      <p>- {author}</p>
    </div>
  );
}

import "./card.styles.css";

import React from "react";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.email}</h3>
    </div>
  );
};

import React from "react";

const Card = (props) => {
  // props -> properties
  console.log(props);

  return (
    <div className="card">
      <h2>Name:{props.name}</h2>
      <h3>Email:{props.email}</h3>
      <h4>Age:{props.age}</h4>
      <button>{props.isActive ? "show Profile" : "Profile Locked"}</button>
    </div>
  );
};

export default Card;

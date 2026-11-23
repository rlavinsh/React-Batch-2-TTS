import React from "react";
import { useLocation } from "react-router-dom";
const DashBoard = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Welcome {location.state.firstName}</h1>
    </div>
  );
};

export default DashBoard;

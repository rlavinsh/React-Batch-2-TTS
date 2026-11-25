import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const D = () => {
  const data = useContext(MyContext);
  //   console.log(data);

  return (
    <div>
      <h1>Welcome {data.myName}</h1>
      <h2>My Email {data.myEmail}</h2>
    </div>
  );
};

export default D;

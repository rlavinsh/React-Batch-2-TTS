import React from "react";
import Card from "./Card";

const App = () => {
  // const user = {
  //   name: "Rahul",
  //   email: "rahul@gmail.com",
  //   age: 25,
  //   isActive: true,
  // };

  // const skills = ["HTML", "CSS", "JS", "REACT"];

  function greet(userName) {
    console.log("Welcome !!", userName);
  }
  return (
    <div className="parent">
      {/* <Card name="hello" email="hello@gmail.com" age={18} isActive={true} />
      <Card name="Ritik" email="ritik@gmail.com" age={20} isActive={false} />
      <Card name="Adarsh" email="adarsh@gmail.com" age={21} isActive={true} /> */}
      {/* <Card userData={user} /> */}
      {/* <Card skills={skills} /> */}

      <Card greet={greet} />
    </div>
  );
};

export default App;

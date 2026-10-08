import React from "react";
import Card from "./Card";

const App = () => {
  function getData(user) {
    console.log(user);
  }

  const skills = ["HTML", "CSS", "JS", "REACT"];

  return (
    <div className="parent">
      <Card
        name="Rahul"
        email="rahul@gmail.com"
        course="MERN"
        skills={skills}
        getData={getData}
      />
    </div>
  );
};

export default App;

import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="parent">
      <Card name="hello" email="hello@gmail.com" age={18} isActive={true} />
      <Card name="Ritik" email="ritik@gmail.com" age={20} isActive={false} />
      <Card name="Adarsh" email="adarsh@gmail.com" age={21} isActive={true} />
    </div>
  );
};

export default App;

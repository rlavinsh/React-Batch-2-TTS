import React from "react";
import A from "./components/A";
const myName = "Lavinsh";
const myEmail = "lavinsh@gmail.com";
const App = () => {
  return (
    <div>
      <h1>Props Drilling</h1>
      <A myName={myName} myEmail={myEmail} />
    </div>
  );
};

export default App;

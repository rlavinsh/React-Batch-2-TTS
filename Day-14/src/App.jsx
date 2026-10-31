import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import App1 from "./App1";

const App = () => {
  // const [isActive, setIsActive] = useState(true);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  function handleIncrement() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("value change ho rahi hein");
  }, [name, count]);

  return (
    <div>
      <h1>Count:{count}</h1>

      <button onClick={handleIncrement}>Increment</button>

      <br />
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      {/* {isActive && <App1 />} */}

      {/* <button
        onClick={() => {
          setIsActive(false);
        }}
      >
        Hide Component
      </button> */}
    </div>
  );
};

export default App;

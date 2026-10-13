import React from "react";
import { useState } from "react";
const Counter = () => {
  //   let count = 5;

  const [count, setCount] = useState(0);

  //   console.log(useState(5));

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  console.log("kya yeah baar baar chal raha hein");

  //   console.log(useState());

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

import React from "react";
import { useState, useEffect } from "react";

const App1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(count + 1);
    }, 3000);

    return function () {
      console.log(`Cleaning Count is ${count}`);
      clearInterval(intervalId);
    };
  });
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default App1;

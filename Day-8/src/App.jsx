import React from "react";
import Counter from "./Counter";

const App = () => {
  let count = 0;
  // console.log(count);

  function handleMouseEnter() {
    console.log("Mouse enter event chal gaya");
  }
  function handleMouseLeave() {
    console.log("Mouse leave event chal gaya");
  }

  function handleName(e) {
    console.log("typing something");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div>
      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          console.log(count++);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          console.log(count--);
        }}
      >
        Decrement
      </button>
      {console.log(count)}
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      <input type="text" placeholder="Enter your Name" onChange={handleName} />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">FisrtName:</label>
        <input type="text" placeholder="Enter your Firstname" />
        <button>Register</button>
      </form> */}
      <Counter />
    </div>
  );
};

export default App;

import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
const App = () => {
  return (
    <>
      {/* <div>
        <h1 className="text-5xl text-white underline bg-amber-700 font-bold p-2 m-3 rounded-lg">
          Welcome
        </h1>
        <Home />
      </div>

      <div>
        <About />
      </div> */}
      <div className="flex m-2 bg-green-400 text-3xl justify-between h-[100px] p-3 items-center">
        <h1>Tech Store</h1>
        <ul className="flex gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </>
  );
};

export default App;

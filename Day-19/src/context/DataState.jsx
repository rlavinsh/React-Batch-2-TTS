import React from "react";
import MyContext from "./MyContext";
const DataState = (props) => {
  //   console.log(props);

  const myName = "Lavinsh";
  const myEmail = "lavinsh@gmail.com";
  return (
    <div>
      <MyContext.Provider value={{ myEmail, myName }}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
};

export default DataState;

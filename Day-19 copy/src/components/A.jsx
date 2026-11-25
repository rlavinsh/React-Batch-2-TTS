import React from "react";
import B from "./B";

const A = (props) => {
  //   console.log(props);
  return (
    <div>
      <B myName={props.myName} myEmail={props.myEmail} />
    </div>
  );
};

export default A;

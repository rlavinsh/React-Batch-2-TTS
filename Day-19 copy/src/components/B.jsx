import React from "react";
import C from "./C";

const B = (props) => {
  //   console.log(props);

  return (
    <div>
      <C myName={props.myName} myEmail={props.myEmail} />
    </div>
  );
};

export default B;

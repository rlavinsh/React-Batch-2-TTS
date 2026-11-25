import React from "react";
import D from "./D";

const C = (props) => {
  //   console.log(props);

  return (
    <div>
      <D myName={props.myName} myEmail={props.myEmail} />
    </div>
  );
};

export default C;

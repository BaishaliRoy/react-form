import React from "react";
import Popup from "./Popup";

function Hello(props) {
  console.log(props.name);
  return (
    <div className="appForm">
      <h1>OneClick Buddy</h1>
      <h2> Your Account is created successfully !!! </h2>
      {/* <Popup /> */}
    </div>
  );
}

export default Hello;

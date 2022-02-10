import React from "react";
import Popup from "./Popup";

function Hello(props) {
  console.log(props.name);
  return (
    <div className="hello">
      <Popup />
    </div>
  );
}

export default Hello;

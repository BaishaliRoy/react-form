import React from "react";

function saveMessage(props) {
  console.log(props.name);
  return (
    <div className="appForm">
      <h1>JusClick</h1>
      <h2> Profile changes saved successfully !!! </h2>
      {/* <Popup /> */}
    </div>
  );
}

export default saveMessage;

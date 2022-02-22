import React from "react";

function saveMessage(props) {
  const navigate = () => {
    event.preventDefault();

    props.history.push("/login");
  };

  return (
    <div className="loginForm">
      <h1>JusClick</h1>
      <h2> Profile saved successfully! </h2>
      {/* <Popup /> */}
      <button className="btn" type="button" onClick={navigate}>
        Go To Login Page
      </button>
    </div>
  );
}

export default saveMessage;

import React, { Component, useState } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Redirect } from "react-router-dom";

const CustomInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input type={fieldType} {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const ValidationMessage = ({ valid, visited, validationMessage }) => {
  return (
    <>
      {!valid && visited && <div className="required">{validationMessage}</div>}
    </>
  );
};

const requiredValidator = (value) => {
  return value ? "" : "This field is required";
};

const mobileValidator = (value) =>
  new RegExp("^[0-9]{10,12}$").test(value)
    ? ""
    : "Please enter a valid mobile number.";

export default function Login(props) {
  const [show, setShow] = useState(false);

  const handleSubmit = (data) => {
    console.log(`
      
      Mobile: ${data.mobile}
      Email: ${data.email}
      Password: ${data.password}
    `);

    event.preventDefault();

    setShow(true);
    sessionStorage.setItem("mobile", data.mobile);

    props.history.push("/your-profile");
  };
  const navigate = () => {
    event.preventDefault();

    props.history.push("/signup");
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <form className="loginForm" onSubmit={formRenderProps.onSubmit}>
            <h1>JusClick</h1>
            <div className="div">
              <Field
                label="Mobile"
                name="mobile"
                fieldType=""
                component={CustomInput}
                validator={[requiredValidator, mobileValidator]}
              />

              <Field
                label="Password"
                name="password"
                fieldType="password"
                component={CustomInput}
                validator={requiredValidator}
              />
            </div>
            <button className="btn" disabled={!formRenderProps.allowSubmit}>
              Login
            </button>
            OR
            <button className="btn" type="button" onClick={navigate}>
              Sign Up
            </button>
            {/* <div style={{ display: show ? "block" : "none" }}></div> */}
          </form>
        )}
      ></Form>
    </>
  );
}

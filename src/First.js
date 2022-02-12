import React, { Component, useState } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";

import Otp from "./Otp";

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

export default function First(props) {
  const [show, setShow] = useState(false);

  const handleSubmit = (data) => {
    console.log(`
      
      Mobile: ${data.mobile}
      Email: ${data.email}
      Password: ${data.password}
      Country: ${data.country}
      Accepted Terms: ${data.acceptedTerms}
    `);

    event.preventDefault();
    setShow(true);

    console.log(JSON.stringify(data));
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <form className="appForm" onSubmit={formRenderProps.onSubmit}>
            <h1>OneClick Buddy</h1>
            <div className="fdiv">
              <Field
                label="Mobile"
                name="mobile"
                fieldType=""
                component={CustomInput}
                validator={[requiredValidator, mobileValidator]}
              />
              <button className="btn" disabled={!formRenderProps.allowSubmit}>
                Get OTP
              </button>

              {/* <div style={{ display: show ? "block" : "none" }}></div> */}

              <Otp control={!show} />
            </div>
          </form>
        )}
      ></Form>
    </>
  );
}

import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import countries from "./countries";

const MobileInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input
        type={fieldType}
        {...others}
        value={sessionStorage.getItem("mobile")}
        disabled
      />
      <ValidationMessage {...others} />
    </div>
  );
};
const CustomInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input type={fieldType} {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomDropDown = ({ options, ...others }) => {
  return (
    <div>
      <DropDownList data={options} {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomCheckbox = ({ ...props }) => {
  return (
    <div>
      <Checkbox {...props} />
      <ValidationMessage {...props} />
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

const emailValidator = (value) =>
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email.";

const mobileValidator = (value) =>
  new RegExp("^[0-9]{10,12}$").test(value)
    ? ""
    : "Please enter a valid mobile number.";

const zipValidator = (value) =>
  new RegExp("^[0-9]{0,6}$").test(value)
    ? ""
    : "Please enter a valid zip number.";

const requiredValidator = (value) => {
  return value ? "" : "This field is required";
};

export default function App(props) {
  const handleSubmit = (data) => {
    console.log(`
      
      Mobile: ${data.mobile}
      Email: ${data.email}
      Password: ${data.password}
      Country: ${data.country}
      Accepted Terms: ${data.acceptedTerms}
    `);

    event.preventDefault();

    console.log(JSON.stringify(data));

    sessionStorage.removeItem("mobile");

    props.history.push("/confirm", { name: data.name });

    //
    // createAccount().then((data) => {
    //   if (!data.err) {
    //      redirection to confirm
    //   } else {
    //     setError(true);
    //   }
    // });
  };

  return (
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
              component={MobileInput}
            />

            {/* <Field
            label="Email"
            name="email"
            fieldType="email"
            component={CustomInput}
            validator={[requiredValidator, emailValidator]}
          /> */}

            <Field
              label="Password"
              name="password"
              fieldType="password"
              component={CustomInput}
              validator={requiredValidator}
            />
          </div>

          <Field
            label="Name"
            name="name"
            fieldType=""
            component={CustomInput}
            validator={[requiredValidator]}
          />

          <Field
            label="Home Address Line"
            name="addr"
            fieldType=""
            component={CustomInput}
            validator={[requiredValidator]}
          />
          <div className="fdiv">
            <Field
              label="Zip Code"
              name="zcode"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator, zipValidator]}
            />

            <Field
              label="State"
              name="state"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator]}
            />

            <Field
              label="Country"
              name="country"
              component={CustomDropDown}
              options={countries}
              validator={requiredValidator}
            />
          </div>

          <Field
            label="Office Address Line"
            name="oaddr"
            fieldType=""
            component={CustomInput}
            validator={[requiredValidator]}
          />
          <div className="fdiv">
            <Field
              label="Office Zip Code"
              name="ozcode"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator, zipValidator]}
            />

            <Field
              label="State"
              name="ostate"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator]}
            />

            <Field
              label="Country"
              name="ocountry"
              component={CustomDropDown}
              options={countries}
              validator={requiredValidator}
            />
          </div>

          <Field
            label="I accept the terms and conditions "
            name="acceptedTerms"
            component={CustomCheckbox}
            validator={requiredValidator}
          />

          <button className="btn" disabled={!formRenderProps.allowSubmit}>
            Create Account
          </button>
        </form>
      )}
    ></Form>
  );
}

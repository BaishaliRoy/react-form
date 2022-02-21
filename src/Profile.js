import React, { useState, useEffect } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import Data from "./data.json";

import states from "./states";

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

const ValidationMessage = ({ valid, visited, validationMessage }) => {
  return (
    <>
      {!valid && visited && <div className="required">{validationMessage}</div>}
    </>
  );
};

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

export default function Profile(props) {
  const [key, setKey] = useState(sessionStorage.getItem("mobile"));

  console.log(sessionStorage.getItem("mobile"));

  const handleSubmit = (data) => {
    event.preventDefault();
    sessionStorage.removeItem("mobile");
    props.history.push("/save-confirm", { name: data.name });

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
          <h1>JusClick</h1>
          <div className="fdiv">
            <Field
              label="Mobile"
              name="mobile"
              fieldType=""
              component={MobileInput}
            />

            <Field
              label="Name"
              name="name"
              fieldType=""
              component={CustomInput}
              value={Data[key].name}
              validator={[requiredValidator]}
            />
          </div>

          <div className="fdiv">
            <Field
              label="Home Address Line1"
              name="haddr1"
              fieldType=""
              component={CustomInput}
              value={Data[key].haddr1}
              validator={[requiredValidator]}
            />
            <Field
              label="Home Address Line2"
              name="haddr2"
              fieldType=""
              value={Data[key].haddr2}
              component={CustomInput}
            />
            <Field
              label="Landmark"
              name="haddr3"
              fieldType=""
              value={Data[key].hlandmark}
              component={CustomInput}
            />
            <Field
              label="Zip Code"
              name="hzcode"
              fieldType=""
              component={CustomInput}
              value={Data[key].haddr2}
              validator={[requiredValidator, zipValidator]}
            />
            <Field
              label="District"
              name="hdistrict"
              fieldType=""
              component={CustomInput}
              value={Data[key].hdistrict}
              validator={[requiredValidator]}
            />

            <Field
              label="State"
              name="hstate"
              fieldType=""
              component={CustomDropDown}
              options={states}
              value={Data[key].hstate}
              validator={[requiredValidator]}
            />
          </div>

          <div className="fdiv">
            <Field
              label="Office Address Line1"
              name="oaddr1"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator]}
            />
            <Field
              label="Office Address Line2"
              name="oaddr2"
              fieldType=""
              component={CustomInput}
            />
            <Field
              label="Landmark"
              name="oaddr3"
              fieldType=""
              component={CustomInput}
            />
            <Field
              label="Office Zip Code"
              name="ozcode"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator, zipValidator]}
            />
            <Field
              label="Office District"
              name="odistrict"
              fieldType=""
              component={CustomInput}
              validator={[requiredValidator]}
            />

            <Field
              label="State"
              name="ostate"
              fieldType=""
              component={CustomDropDown}
              options={states}
              validator={[requiredValidator]}
            />
          </div>

          <button className="btn" disabled={!formRenderProps.allowSubmit}>
            Save Your Changes
          </button>
        </form>
      )}
    ></Form>
  );
}

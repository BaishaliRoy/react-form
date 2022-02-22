import React, { useState, useEffect } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
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
    props.history.push("/save-confirm");

    //
    // saveAccount().then((data) => {
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
              defaultValue={Data[key].name}
              editable="true"
            />
          </div>

          <div className="fdiv">
            <Field
              label="Home Address Line1"
              name="haddr1"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].haddr1}
            />
            <Field
              label="Home Address Line2"
              name="haddr2"
              fieldType=""
              defaultValue={Data[key].haddr2}
              component={CustomInput}
            />
            <Field
              label="Landmark"
              name="haddr3"
              fieldType=""
              defaultValue={Data[key].hlandmark}
              component={CustomInput}
            />
            <Field
              label="Zip Code"
              name="hzcode"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].hzip}
            />
            <Field
              label="District"
              name="hdistrict"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].hdistrict}
            />

            <Field
              label="State"
              name="hstate"
              fieldType=""
              component={CustomDropDown}
              options={states}
              defaultValue={Data[key].hstate}
            />
          </div>

          <div className="fdiv">
            <Field
              label="Office Address Line1"
              name="oaddr1"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].oaddr1}
            />
            <Field
              label="Office Address Line2"
              name="oaddr2"
              fieldType=""
              defaultValue={Data[key].oaddr2}
              component={CustomInput}
            />
            <Field
              label="Landmark"
              name="oaddr3"
              fieldType=""
              value={Data[key].olandmark}
              component={CustomInput}
            />
            <Field
              label="Zip Code"
              name="ozcode"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].ozip}
            />
            <Field
              label="District"
              name="odistrict"
              fieldType=""
              component={CustomInput}
              defaultValue={Data[key].odistrict}
            />

            <Field
              label="State"
              name="ostate"
              fieldType=""
              component={CustomDropDown}
              options={states}
              defaultValue={Data[key].ostate}
            />
          </div>

          <button
            className="btn"
            type="submit"
            disabled={!formRenderProps.allowSubmit}
          >
            Save Your Changes
          </button>
        </form>
      )}
    ></Form>
  );
}

import React, { Component } from "react";
import OtpInput from "react-otp-input";
import { withRouter } from "react-router-dom";

class Otp extends Component {
  state = { otp: "" };

  handleChange = (otp) => {
    this.setState({ otp: otp });
    console.log(this.state.otp);
  };

  navigate = () => {
    this.props.history.push("/register-yourself");
  };

  render() {
    return (
      <>
        <OtpInput
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={4}
          isInputSecure={true}
          isDisabled={this.props.control}
          separator={
            <span>
              <strong>-</strong>
            </span>
          }
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0 1rem",
            fontSize: "2rem",
            borderRadius: 4,
            border: "1px solid rgba(0,0,0,0.3)",
          }}
        />
        <button
          className="btn"
          type="button"
          disabled={!(this.state.otp.length > 3)}
          onClick={this.navigate}
        >
          Verify OTP
        </button>
      </>
    );
  }
}

export default withRouter(Otp);

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import Popup from "./Popup";
import First from "./First";
import Login from "./Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={First} />
        <Route path="/login" exact component={Login} />
        <Route path="/register-yourself" exact component={App} />
        <Route path="/confirm" exact component={Hello} />
        <Route path="/popup" exact component={Popup} />

        <Route path="*" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

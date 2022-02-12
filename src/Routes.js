import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import Popup from "./Popup";
import First from "./First";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={First} />
        <Route path="/register-yourself" exact component={App} />
        <Route path="/confirm" exact component={Hello} />
        <Route path="/popup" exact component={Popup} />

        <Route path="*" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

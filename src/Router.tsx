import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Edit from "./Edit";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/edit/new" component={Edit} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </BrowserRouter>
);

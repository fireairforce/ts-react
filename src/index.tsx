import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import "./index.css";
import configureStore from "./store/index";

const store = configureStore();
const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

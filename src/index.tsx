import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./Router";
import { store, persistor } from "./store/index";
import "./index.css";
const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

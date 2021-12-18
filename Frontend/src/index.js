import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Store
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

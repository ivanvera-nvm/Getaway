import React from "react";
import ReactDOM from "react-dom";
import App from "./components/views/App/App";
import store from "./state/store";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

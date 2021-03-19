import React from "react";
import ReactDOM from "react-dom";
import App from "./components/views/App/App";
import store from "./state/store";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#eeeeee",
//     },
//     secondary: {
//       main: "#b71c1c",
//     },
//   },
// });


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

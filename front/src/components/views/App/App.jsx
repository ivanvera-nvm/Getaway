import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Body from "../body/Body";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
/* import Error from "../error/Error"; */

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/card" component={Card} />
          <Route exact path="/body" component={Body} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/footer" component={Footer} />
          <Redirect to="/" />
          {/*   <Route component={Error} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

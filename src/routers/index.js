import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../component/About";
import Home from "../component/Home";
import Navbar from "../component/Navbar";
const Routes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

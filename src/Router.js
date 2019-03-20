import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
const Router = props => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/footer" component={Footer} />
      <Route exact path="/nav" component={Nav} />
    </Switch>
  );
};

export default Router;

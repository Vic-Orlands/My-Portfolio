import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Biography from "./Biography";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Errorpage from "./ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Biography} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route component={Errorpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Router;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Weplate from "pages/Projects/Weplate";
import Werbnb from "pages/Projects/We_r_bnb";
import TeamEvery from "pages/Projects/Team_everyone";
import SauceLive from "pages/Projects/Sauce_live";
import "styles/reset-styles.scss";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/projects/weplate" component={Weplate}></Route>
        <Route exact path="/projects/we-r-bnb" component={Werbnb}></Route>
        <Route exact path="/projects/team-every" component={TeamEvery}></Route>
        <Route exact path="/projects/sauce-live" component={SauceLive}></Route>
      </Switch>
    </Router>
  );
};
export default Routes;

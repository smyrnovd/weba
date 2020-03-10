import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Trello } from "../Trello";
import { ClockPage } from "../ClockPage";

export const App = () => (
  <>
    <Switch>
      <Route path="/webacademy/clock" exact component={ClockPage} />
      <Route path="/webacademy/trello" component={Trello} />
      <Redirect to="/webacademy/clock" />
    </Switch>
  </>
);

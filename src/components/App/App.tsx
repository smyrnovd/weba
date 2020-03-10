import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Trello } from "../Trello";
import { ClockPage } from "../ClockPage";

export const App = () => {
  return (
    <>
      <div>
        <Link to="/webacademy/clock">Clock App</Link>
      </div>

      <div>
        <Link to="/webacademy/trello">Trello App</Link>
      </div>

      <Switch>
        <Route path="/webacademy/clock" exact component={ClockPage} />
        <Route path="/webacademy/trello" component={Trello} />
        <Redirect to="/webacademy" />
      </Switch>
    </>
  );
};

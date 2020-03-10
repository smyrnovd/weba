import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../utils";

export const App = () => {
  const renderLinks = () => {
    return (
      <header>
        {routes.map((route: any, i: number) => (
          <Link key={i} to={route.path}>
            {route.title}
          </Link>
        ))}
      </header>
    );
  };

  const renderApps = () => {
    return (
      <main>
        <Switch>
          {routes.map((route: any, i: number) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              render={props => route.render({ ...props })}
            />
          ))}
          <Redirect to="/webacademy/404" />
        </Switch>
      </main>
    );
  };

  return (
    <>
      {renderLinks()}
      {renderApps()}
    </>
  );
};

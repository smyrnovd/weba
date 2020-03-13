import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../utils";
import { ProtectedRoute } from "../ProtectedRoute";
import { Nav } from "../Nav";

export const App = () => {
  const renderRoute = (route: any, i: number) => {
    if (route.isProtected) {
      return <ProtectedRoute {...route} key={i} />;
    } else {
      return (
        <Route
          key={i}
          exact={route.exact}
          path={route.path}
          render={props => route.render({ ...props })}
        />
      );
    }
  };

  const renderContent = () => {
    return (
      <main>
        <Switch>
          {routes.map(renderRoute)}
          <Redirect to="/webacademy/404" />
        </Switch>
      </main>
    );
  };

  return (
    <>
      <Nav />
      {renderContent()}
    </>
  );
};

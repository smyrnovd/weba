import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../utils";
import { ProtectedRoute } from "../ProtectedRoute";
import { Nav } from "../Nav";

export const App: React.FC = (): JSX.Element => {
  const renderRoute = (route: any, i: number): JSX.Element => {
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

  const renderContent = (): JSX.Element => {
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

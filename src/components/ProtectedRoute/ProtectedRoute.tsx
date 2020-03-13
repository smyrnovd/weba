import React, { FunctionComponent } from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from "react-router-dom";

type ProtectedRouteType = RouteProps & {
  isAuthenticated: boolean;
};

export const ProtectedRoute: FunctionComponent<ProtectedRouteType> = ({
  render,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeCompProps: RouteComponentProps) =>
        isAuthenticated ? (
          render!(routeCompProps)
        ) : (
          <Redirect to="/webacademy/trello/login" />
        )
      }
    />
  );
};

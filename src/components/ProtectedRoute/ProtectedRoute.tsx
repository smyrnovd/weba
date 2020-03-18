import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from "react-router-dom";
import { isLoggedIn } from "../../utils";

type ProtectedRouteType = RouteProps & {
  isAuthenticated: boolean;
};

export const ProtectedRoute: React.FC<ProtectedRouteType> = ({
  render,
  isAuthenticated,
  ...rest
}): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(routeCompProps: RouteComponentProps) =>
        isLoggedIn() ? (
          render!(routeCompProps)
        ) : (
          <Redirect to="/webacademy/trello/login" />
        )
      }
    />
  );
};

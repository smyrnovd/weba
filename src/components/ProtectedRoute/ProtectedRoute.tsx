import React, { FunctionComponent } from "react";
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

export const ProtectedRoute: FunctionComponent<ProtectedRouteType> = ({
  render,
  isAuthenticated,
  ...rest
}) => {
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

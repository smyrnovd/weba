import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux";

type ProtectedRouteType = RouteProps & {
  isAuthenticated: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteType> = ({
  render,
  isAuthenticated,
  ...rest
}): JSX.Element => {
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

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

const ConnectedProtectedRoutes = connect(mapStateToProps)(ProtectedRoute);

export { ConnectedProtectedRoutes as ProtectedRoute };

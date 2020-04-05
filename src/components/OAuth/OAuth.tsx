import React from "react";
import { RouteChildrenProps, Redirect } from "react-router";
import { connect } from "react-redux";
import { setToken } from "../../redux";

type OAuthProps = {
  onSetToken?: (token: string) => void;
} & RouteChildrenProps;

const OAuth: React.FC<OAuthProps> = ({
  location: { hash },
  onSetToken,
}: OAuthProps): JSX.Element => {
  const token = hash.split("=")[1];
  onSetToken && onSetToken(token);
  return <Redirect to="/webacademy/trello/dashboard" />;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetToken: (token: string) => dispatch(setToken(token)),
  };
};

const ConnectedOAuth = connect(undefined, mapDispatchToProps)(OAuth);

export { ConnectedOAuth as OAuth };

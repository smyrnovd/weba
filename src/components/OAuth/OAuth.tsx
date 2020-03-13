import React, { FunctionComponent } from "react";
import { RouteChildrenProps, Redirect } from "react-router";
import { setToLocalStorage } from "../../utils";

export const OAuth: FunctionComponent<RouteChildrenProps> = (
  props: RouteChildrenProps
) => {
  const token: string = props.location.hash.split("=")[1];
  setToLocalStorage(token);
  return <Redirect to="/webacademy/trello/dashboard" />;
};

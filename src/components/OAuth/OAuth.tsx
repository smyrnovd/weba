import React from "react";
import { RouteChildrenProps, Redirect } from "react-router";
import { setToLocalStorage } from "../../utils";

export const OAuth = (props: RouteChildrenProps) => {
  let tokenProps: string = props.location.hash.split("=")[1];
  setToLocalStorage(tokenProps);
  return <Redirect to="/webacademy/trello/dashboard" />;
};

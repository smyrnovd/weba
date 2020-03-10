import React from "react";
import { setToLocalStorage, TOKEN_STORAGE_KEY } from "../../utils/storage";
import { Redirect } from "react-router-dom";

export const OAuth = () => {
  const tokenFromUrl: string = window.location.hash.split("=")[1];
  setToLocalStorage(TOKEN_STORAGE_KEY, tokenFromUrl);
  return <Redirect to="/webacademy/trello" />;
};

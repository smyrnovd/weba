import React, { useState, useEffect } from "react";
import { Login } from "../Login";
import { Dashboard } from "../Dashboard/Dashboard";
import { isAuth } from "../../utils/isAuth";
import { getFromLocalStorage } from "../../utils/storage";
import { TOKEN_STORAGE_KEY } from "../../utils/storage";
import { Switch, Redirect } from "react-router-dom";

export const Trello = () => {
  if (isAuth()) {
    const token = getFromLocalStorage(TOKEN_STORAGE_KEY);
    return (
      <Switch>
        <Dashboard token={token} />
      </Switch>
    );
  } else {
    return <Redirect to="/webacademy/trello/login" />;
  }
};

import React from "react";
import { removeToken } from "../../utils/removeToken";
import { getFromLocalStorage } from "../../utils";

export const Dashboard = (props: any) => (
  <div>
    <div>
      DASHBOARD
      <p>{getFromLocalStorage()}</p>
      <a href={process.env.REACT_APP_TRELLO_URL} onClick={() => removeToken()}>
        You can remove token with this link
      </a>
    </div>
  </div>
);

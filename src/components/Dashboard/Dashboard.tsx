import React from "react";
import { removeToken } from "../../utils/removeToken";

export const Dashboard = (props: any) => (
  <div>
    <div>
      <p>{props.token}</p>
      <a href={process.env.REACT_APP_TRELLO_URL} onClick={() => removeToken()}>
        You can remove token with this link
      </a>
      DASHBOARD
    </div>
  </div>
);

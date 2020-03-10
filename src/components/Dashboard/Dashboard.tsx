import React from "react";
import { removeToken } from "../../utils/hooks/removeToken";

export const Dashboard = (props: any) => (
  <div>
    <div>
      <p>{props.token}</p>
      <a
        href={process.env.REACT_APP_REDIRECT_URL}
        onClick={() => removeToken(props.setToken)}
      >
        You can remove token with this link
      </a>
    </div>
  </div>
);

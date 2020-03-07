import React, { useState, useEffect } from "react";
import { syncToken } from "../../utils/hooks/syncToken";
import { removeToken } from "../../utils/hooks/removeToken";

export const Trello = () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPE,
    REACT_APP_NAME
  } = process.env;
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${REACT_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}&return_url=${REACT_APP_REDIRECT_URL}`;

  let [token, setToken] = useState("");

  useEffect(() => syncToken(setToken), [token]);

  return (
    <div>
      {/* Block without Token */}
      {!token && <a href={reqUrl}>Create Trello Token</a>}
      {/* Block with Token */}
      {token && (
        <div>
          <p>{token}</p>
          <a
            href={REACT_APP_REDIRECT_URL}
            onClick={() => removeToken(setToken)}
          >
            You can remove token with this button
          </a>
        </div>
      )}
    </div>
  );
};

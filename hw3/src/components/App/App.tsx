import React, { useState, useEffect } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../../utils";

export const App = () => {
  const TOKEN_STORAGE_KEY: string = "TOKEN";
  const {
    REACT_APP_API_KEY,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPE,
    REACT_APP_NAME
  } = process.env;
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${REACT_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}&return_url=${REACT_APP_REDIRECT_URL}`;

  let [token, setToken] = useState("");

  const removeToken = () => {
    setToken("");
    setToLocalStorage(TOKEN_STORAGE_KEY, "");
  };

  useEffect(() => {
    const tokenUrl: string = window.location.hash.split("=")[1];
    if (tokenUrl) {
      setToken(tokenUrl);
      setToLocalStorage(TOKEN_STORAGE_KEY, tokenUrl);
      console.log("if");
    } else {
      const localToken: any = getFromLocalStorage(TOKEN_STORAGE_KEY);
      setToken(localToken);
      console.log(localToken);
      console.log("else");
    }
  }, []);

  return (
    <div>
      {/* Block without Token */}
      {!token && <a href={reqUrl}>Create Trello Token</a>}
      {/* Block with Token */}
      {token && (
        <div>
          <p>{token}</p>
          <a href="/" onClick={removeToken}>
            You can remove token with this button
          </a>
        </div>
      )}
    </div>
  );
};

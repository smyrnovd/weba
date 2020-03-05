import React, { useState, useEffect } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../../utils";

export const App = () => {
  const TOKEN_STORAGE_KEY: string = "TOKEN";
  const key: string = "82eb7c7eb6b385e06a18315ae9f5fbf5";
  const redirectUrl: string = "http://localhost:3000";
  const scope: string = "read";
  const appName: string = "TrelloAppReact";
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${appName}&scope=${scope}&response_type=token&key=${key}&return_url=${redirectUrl}`;

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
      {!token && <a href={reqUrl}>Create Trello Token</a>}
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

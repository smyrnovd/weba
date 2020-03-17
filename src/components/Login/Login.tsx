import React from "react";
import { isLoggedIn } from "../../utils";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPE,
    REACT_APP_NAME
  } = process.env;
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${REACT_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}&return_url=${REACT_APP_REDIRECT_URL}`;

  if (isLoggedIn()) {
    return <Redirect to="/webacademy/trello/dashboard" />;
  } else {
    return (
      <div className="row justify-content-center">
        <a className="btn btn-primary" href={reqUrl}>
          Create Trello Token
        </a>
      </div>
    );
  }
};

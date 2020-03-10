import React from "react";

export const Login = () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPE,
    REACT_APP_NAME
  } = process.env;
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${REACT_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}&return_url=${REACT_APP_REDIRECT_URL}`;

  return (
    <div>
      <a href={reqUrl}>Create Trello Token</a>
    </div>
  );
};

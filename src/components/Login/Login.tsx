import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux";

type LoginProps = {
  isAuthenticated?: boolean;
};

const Login: React.FC<LoginProps> = ({ isAuthenticated }): JSX.Element => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPE,
    REACT_APP_NAME,
  } = process.env;
  const reqUrl: string = `https://trello.com/1/authorize?expiration=1day&name=${REACT_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}&return_url=${REACT_APP_REDIRECT_URL}`;

  if (isAuthenticated) {
    return <Redirect to="/webacademy/trello/dashboard" />;
  } else {
    return (
      <div className="row justify-content-center">
        <a className="btn btn-primary mt-5" href={reqUrl}>
          Create Trello Token
        </a>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

const ConnectedLogin = connect(mapStateToProps)(Login);
export { ConnectedLogin as Login };

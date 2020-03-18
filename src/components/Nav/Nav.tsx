import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils";
import "./Nav.css";
export const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className="bg-dark pb-1">
      <div className="d-flex py-2 justify-content-center">
        {routes.map((route: any, i: number): JSX.Element | undefined => {
          if (route.title) {
            return (
              <div className="col-lg-1">
                <Link key={i} to={route.path} className="btn btn-light">
                  {route.title}
                </Link>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
};

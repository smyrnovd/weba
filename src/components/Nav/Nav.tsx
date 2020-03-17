import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav className="bg-dark">
      <div className="d-flex py-2">
        {routes.map((route: any, i: number) => {
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

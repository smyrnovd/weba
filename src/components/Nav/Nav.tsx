import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils";
export const Nav = () => {
  return (
    <header>
      {routes.map((route: any, i: number) => (
        <Link key={i} to={route.path}>
          {route.title}
        </Link>
      ))}
    </header>
  );
};

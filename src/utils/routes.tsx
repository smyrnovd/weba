import React from "react";
import { Redirect, RouteChildrenProps } from "react-router-dom";
import { Login } from "../components/Login";
import { ClockPage } from "../components/ClockPage";
import { OAuth } from "../components/OAuth";
import { NotFound } from "../components/NotFound";
import { Dashboard } from "../components/Dashboard";

//описать типы данных

export const routes = [
  {
    path: "/webacademy",
    render: () => <h1>Choose the application</h1>,
    exact: true
  },
  {
    path: "/webacademy/trello",
    render: () => <Redirect to="/webacademy/trello/login" />,
    exact: true
  },
  {
    path: "/webacademy/clock",
    exact: true,
    render: () => <ClockPage />,
    title: "Clock App"
  },
  {
    path: "/webacademy/trello/oauth",
    render: (props: RouteChildrenProps) => <OAuth {...props} />
  },
  {
    path: "/webacademy/trello/login",
    render: () => <Login />,
    title: "Trello App"
  },
  {
    path: "/webacademy/trello/dashboard",
    render: () => <Dashboard />,
    isProtected: true
  },

  {
    path: "/webacademy/404",
    render: () => <NotFound />,
    exact: true
  }
];

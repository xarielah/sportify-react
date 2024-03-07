import { RouteObject } from "react-router-dom";
import Login from "./login/login";
import Logout from "./logout/logout";

export const logoutRoute: RouteObject = {
  path: "/logout",
  element: <Logout />,
};

export const loginRoute: RouteObject = {
  path: "/login",
  element: <Login />,
};

export default [logoutRoute, loginRoute];

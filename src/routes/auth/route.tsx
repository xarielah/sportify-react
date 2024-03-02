import { RouteObject } from "react-router-dom";
import Logout from "./logout/logout";
import Login from "./login/login";

const logoutRoute: RouteObject = {
  path: "logout",
  element: <Logout />,
};

const loginRoute: RouteObject = {
  path: "login",
  element: <Login />,
};

export default [logoutRoute, loginRoute];

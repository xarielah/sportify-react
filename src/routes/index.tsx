import { RouteObject } from "react-router-dom";
import ErrorComponent from "../ui/error-boundary/error-component";
import { activitiesRoute } from "./activities/route";
import { loginRoute, logoutRoute } from "./auth/route";
import { doRoute } from "./do/route";
import Layout from "./layout";
import Root from "./root";

export const mainRoute: RouteObject = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Root />,
    },
    loginRoute,
    logoutRoute,
    activitiesRoute,
    doRoute,
  ],
  errorElement: <ErrorComponent />,
};

import { RouteObject } from "react-router-dom";
import ErrorComponent from "../ui/error-boundary/error-component";

import Root from "./root";
import { profileRoute } from "./profile/route";
import { activitiesRoute } from "./activities/route";
import authRoutes from "./auth/route";

export const routes: RouteObject = {
  path: "/",
  element: <Root />,
  children: [profileRoute, activitiesRoute, ...authRoutes],
  errorElement: <ErrorComponent />,
};

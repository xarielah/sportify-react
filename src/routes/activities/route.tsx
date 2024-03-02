import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "../../ui/wrappers/protected-route";
import { Activities } from "./activities";

export const activitiesRoute: RouteObject = {
  path: "activities",
  element: (
    <ProtectedRoute>
      <Activities />
    </ProtectedRoute>
  ),
};

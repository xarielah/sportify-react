import ProtectedRoute from "@/ui/wrappers/protected-route";
import { Navigate, type RouteObject } from "react-router-dom";
import AddRun from "./add-run/add-run";
import AddWorkout from "./add-workout/add-workout";
import { Do } from "./do";

export const doRoute: RouteObject = {
  path: "/do",
  element: (
    <ProtectedRoute>
      <Do />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "/do",
      element: <Navigate to="/do/add-workout" replace />,
    },
    {
      path: "add-run",
      element: <AddRun />,
    },
    {
      path: "add-workout",
      element: <AddWorkout />,
    },
  ],
};

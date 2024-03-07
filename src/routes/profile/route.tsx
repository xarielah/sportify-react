import { RouteObject } from "react-router-dom";
import Profile from "./profile";
import ProtectedRoute from "@/ui/wrappers/protected-route";

export const profileRoute: RouteObject = {
  path: "profile",
  element: (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  ),
};

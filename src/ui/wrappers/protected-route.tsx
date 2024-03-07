import { useContext } from "react";
import { type AppContext, appContext } from "../app-context/app-context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: IProtectedRoute) {
  const { isLogged, isLoading } = useContext<AppContext>(appContext);

  if (isLoading) return "";
  if (!isLogged && !isLoading) return <Navigate to="/" replace={true} />;
  return <div>{children}</div>;
}

interface IProtectedRoute {
  children: React.ReactNode;
}

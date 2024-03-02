import { Navigate } from "react-router-dom";
import {
  type AppContext,
  appContext,
} from "../../../ui/app-context/app-context";
import { useContext } from "react";
import config from "../../../service/config";

export default function Login() {
  const { isLogged } = useContext<AppContext>(appContext);

  if (isLogged) return <Navigate to="/" />;

  const loginUrl = config.backendUrl + "/auth/google/";
  return (window.location.href = loginUrl);
}

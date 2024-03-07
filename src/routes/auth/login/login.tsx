import { Navigate, useNavigate } from "react-router-dom";
import {
  type AppContext,
  appContext,
} from "../../../ui/app-context/app-context";
import { useContext, useEffect } from "react";
import config from "../../../service/config";

export default function Login() {
  const { isLogged } = useContext<AppContext>(appContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    } else {
      const loginUrl = config.backendUrl + "/auth/google/";
      window.location.replace(loginUrl);
    }
  }, []);

  return <div>מועברים להתחברות...</div>;
}

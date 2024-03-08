import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../service/config";
import {
  appContext,
  type AppContext,
} from "../../../ui/app-context/app-context";

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

import { useContext, useEffect } from "react";
import { AppContext, appContext } from "../../../ui/app-context/app-context";
import { Navigate } from "react-router-dom";
import { AuthService } from "../../../service/auth";

export default function Logout() {
  const { removeUser } = useContext<AppContext>(appContext);

  useEffect(() => {
    AuthService.logout().finally(() => {
      removeUser();
    });
  }, []);

  return <Navigate to="/" />;
}

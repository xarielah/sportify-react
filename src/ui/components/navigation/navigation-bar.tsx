import { useContext, useEffect } from "react";
import { AppContext, appContext } from "../../app-context/app-context";
import { AuthService } from "../../../service/auth";

export default function NavigationBar() {
  const { isLogged, setUser, user } = useContext<AppContext>(appContext);

  useEffect(() => {
    AuthService.getProfile().then((user) => setUser(user));
  }, []);

  return (
    <nav>
      {isLogged && user ? (
        <div>
          hello <span>{user.name}</span>, <a href="/logout">Logout</a>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}

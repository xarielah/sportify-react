import { AuthService } from "@/service/auth";
import { appContext } from "@/ui/app-context/app-context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./subcomponents/login";
import Logout from "./subcomponents/logout";

export default function NavBar() {
  const { isLogged, user, setUser } = useContext(appContext);
  useEffect(() => {
    AuthService.getProfile().then((profile) => {
      setUser(profile);
    });
  }, []);
  return (
    <nav className="p-4 flex justify-between">
      {isLogged && user ? <Logout name={user.name} /> : <Login />}
      <Link to={"/"}>LOGO</Link>
    </nav>
  );
}

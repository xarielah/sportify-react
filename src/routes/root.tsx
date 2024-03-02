import { Outlet } from "react-router-dom";
import NavigationBar from "../ui/components/navigation/navigation-bar";

export default function Root() {
  return (
    <main>
      <header>
        <NavigationBar />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>footer!!!</footer>
    </main>
  );
}

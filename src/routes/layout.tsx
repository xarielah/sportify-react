import Footer from "@/ui/components/footer/footer";
import NavBar from "@/ui/components/header/nav-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="max-w-7xl mx-auto">
        <NavBar />
      </header>
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

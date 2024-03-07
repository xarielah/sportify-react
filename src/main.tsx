import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { mainRoute } from "./routes";
import AppContextProvider from "./ui/app-context/app-context";

const router = createBrowserRouter([mainRoute]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
);

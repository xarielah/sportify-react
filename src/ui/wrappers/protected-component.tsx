import { useContext } from "react";
import { AppContext, appContext } from "../app-context/app-context";

export default function ProtectedComponent({
  children,
  fallback,
}: IProtectedComponent) {
  const { isLogged } = useContext<AppContext>(appContext);
  // Render fallback if available
  if (!isLogged && fallback) return <>{fallback}</>;

  // Don't render if not logged
  if (!isLogged) return "";
  
  return <>{children}</>;
}

interface IProtectedComponent {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

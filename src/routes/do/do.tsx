import { Navigate, Outlet, useLocation } from "react-router-dom";

export function Do() {
  const location = useLocation();
  if (["/do", "/do/"].indexOf(location.pathname) > -1)
    return <Navigate to="/" replace />;

  return (
    <section>
      <Outlet />
    </section>
  );
}

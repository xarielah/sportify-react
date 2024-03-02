import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: IProtectedRoute) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  if (!show) return <div>loading...</div>;
  return <div>{children}</div>;
}

interface IProtectedRoute {
  children: React.ReactNode;
}

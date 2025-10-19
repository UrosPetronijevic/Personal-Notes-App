import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRout({ children }: PrivateRouteProps) {
  const { session }: any = UserAuth();

  if (session === undefined) {
    return <p>Loading ...</p>;
  }

  return <>{session ? <>{children}</> : <Navigate to={"/signup"} />}</>;
}

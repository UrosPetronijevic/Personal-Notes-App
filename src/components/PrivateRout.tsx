import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function PrivateRout({ children }) {
  const { session } = UserAuth();
  return <>{session ? <>{children}</> : <Navigate to={"/signup"} />}</>;
}

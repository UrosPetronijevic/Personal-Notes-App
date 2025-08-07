import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Dashboard from "./components/Dashboard";
import PrivateRout from "./components/PrivateRout";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRout>
        <Dashboard />
      </PrivateRout>
    ),
  },
]);

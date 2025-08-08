import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRout from "../routes/PrivateRout";

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

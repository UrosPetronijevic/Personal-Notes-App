import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [sesion, setSesion] = useState(undefined);

  return (
    <AuthContext.Provider value={{ sesion }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

import { useState } from "react";
import AuthContext from "./auth.context.jsx";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLaoding] = useState(false);

  const value = { user, setUser, loading, setLaoding };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

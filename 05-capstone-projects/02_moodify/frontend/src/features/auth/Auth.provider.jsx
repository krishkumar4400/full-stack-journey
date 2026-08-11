import { useEffect, useState } from "react";
import { AuthContext } from "./Auth.context.jsx";
import { useNavigate } from "react-router";
import { useAuth } from "./hooks/useAuth.js";
import {
  getAuthState,
  getUser,
  loginUser,
  logoutUser,
} from "./services/auth.api.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthState = async () => {
    try {
      setLoading(true);

      const data = await getAuthState();

      if (data?.success) {
        console.log("Auth state:", data);

        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth state error:", error);

      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAuthState();
  }, []);

  const value = {
    loading,
    setLoading,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

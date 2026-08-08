import { useContext } from "react";
import { AuthContext } from "../Auth.context.jsx";
import { loginUser } from "../services/auth.api.js";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const {
    loading,
    setLoading,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    handleAuthState,
  } = context;

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);

      const data = await loginUser(email, password);

      console.log("LOGIN RESPONSE:", data);

      if (data?.success) {
        setUser(data.user);
        setIsLoggedIn(true);
      }

      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = (username, email, password) => {};

  return {
    handleLogin,
    handleAuthState,

    loading,
    setLoading,

    user,
    setUser,

    isLoggedIn,
    setIsLoggedIn,

    registerUser,

    navigate,
  };
};

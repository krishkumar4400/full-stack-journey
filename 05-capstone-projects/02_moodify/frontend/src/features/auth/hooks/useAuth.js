import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth.context.jsx";
import { loginUser, registerUser } from "../services/auth.api.js";
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

  const handleLogout = async () => {
    try {
      setLoading(true);
      const data = await logoutUser();
      if (data?.success) {
        setIsLoggedIn(false);
        setUser(null);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGetUser = () => {
    try {
      setLoading(true);
      const data = await getUser();
      if(data?.success) {
        setUser(data.user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
              setUser(null);
        setIsLoggedIn(false);
    } finally {
      setIsLoggedIn(false);
    }
  }

  const handleRegister = async (username, email, password) => {
    try {
      setLoading(true);
      const data = await registerUser(username, email, password);
      if(data?.success) {
        setUser(data.user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
        setUser(null);
        setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);


  return {
    handleLogin,
    handleAuthState,
    handleRegister,
    handleGetUser,
    handleLogout,

    loading,
    setLoading,

    user,
    setUser,

    isLoggedIn,
    setIsLoggedIn,

    navigate,
  };

};

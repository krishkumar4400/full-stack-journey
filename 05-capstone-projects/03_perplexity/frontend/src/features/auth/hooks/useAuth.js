import { useContext } from "react";
import { register } from "../services/auth.api.js";
import AuthContext from "../context/auth.context.jsx";

const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleRegister = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const data = await register({ name, email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
};

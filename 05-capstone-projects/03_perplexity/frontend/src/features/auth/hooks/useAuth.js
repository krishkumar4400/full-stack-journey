import { useDispatch } from "react-redux";
import { register, login, logout, getUser } from "../services/auth.api.js";
import { setUser, setLoading, setError } from "../auth.slice.js";

const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async ({ name, email, password }) => {
    try {
      dispatch(setLoading(true));
      const data = await register({ name, email, password });
      return data;
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response?.data.message || "Registration Failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      dispatch(setLoading(true));
      const data = await login({ email, password });
      dispatch(setUser(data.user));
      return data;
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response?.data.message || "Login Failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetUser = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getUser();
      // console.log(data)
      dispatch(setUser(data.user));
    } catch (error) {
      console.log(error);
      dispatch(
        setError(error.response?.data.message || "Failed to fetch user"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    handleGetUser,
    handleLogin,
    handleRegister,
  };
};

export default useAuth;

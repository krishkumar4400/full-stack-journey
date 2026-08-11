import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

const Protected = ({ children }) => {
  const { user, loading, navigate } = useAuth();
  if (loading) {
    return <h1>Loading ......</h1>;
  }
  if (!loading && !user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default Protected;

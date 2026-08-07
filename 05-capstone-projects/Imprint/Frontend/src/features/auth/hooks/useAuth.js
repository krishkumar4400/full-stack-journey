import { useContext } from "react";
import { AuthContext } from "../auth.context.js";
import { login, register, getCurrentUser } from "../services/auth.api.js";

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

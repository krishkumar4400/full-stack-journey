import { useContext } from "react";
import { AuthContext } from "../auth.context.js";



export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
import { Navigate } from "react-router";
import { useAuth } from "./features/auth/hooks/useAuth.js"


const ProtectedRoute = ({children}) => {
    const {isLoggedIn, loading} = useAuth();
    console.log(isLoggedIn, loading)

    if(loading) {
        return <div>Loading .....</div>
    }

    if(!isLoggedIn) {
        return <Navigate to={"/login"} replace />
    }

    return children;
}

export default ProtectedRoute

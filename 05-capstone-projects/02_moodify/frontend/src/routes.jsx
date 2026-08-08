import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import { useAuth } from "./features/auth/hooks/useAuth.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import FaceExpression from "./features/expression/components/FaceExpression.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/face",
    element: (
      <ProtectedRoute>
        <FaceExpression />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default routes;

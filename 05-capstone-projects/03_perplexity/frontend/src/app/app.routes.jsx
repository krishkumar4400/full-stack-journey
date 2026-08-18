import { createBrowserRouter } from "react-router";
import Home from "../features/auth/pages/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

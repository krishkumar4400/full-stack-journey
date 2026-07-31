import { createBrowserRouter } from "react-router-dom";
import Register from "./features/auth/pages/Register.jsx";
import Login from "./features/auth/pages/Login.jsx";
import UploadAvatar from "./features/auth/pages/UploadAvatar.jsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/upload-avatar",
    element: <UploadAvatar />,
  },
]);

export default routes;

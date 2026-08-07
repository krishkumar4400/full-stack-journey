import { createBrowserRouter } from "react-router-dom";
import Register from "./features/auth/pages/Register.jsx";
import Login from "./features/auth/pages/Login.jsx";
import UploadAvatar from "./features/auth/pages/UploadAvatar.jsx";
import Home from "./pages/Home.jsx";
import Feed from "./features/posts/pages/Feed.jsx";
import CreatePost from "./features/posts/pages/CreatePost.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
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
    path: "/upload-avatar",
    element: <UploadAvatar />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
]);

export default routes;

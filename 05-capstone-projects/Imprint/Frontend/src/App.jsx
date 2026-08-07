import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import "./style.scss";
import "./features/shared/global.scss";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./features/auth/auth.provider.jsx";
import { PostContextProvider } from "./features/posts/post.provider.jsx";

const App = () => {
  return (
    <>
      {" "}
      <AuthProvider>
        <PostContextProvider>
          <RouterProvider router={routes} />
        </PostContextProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
};

export default App;

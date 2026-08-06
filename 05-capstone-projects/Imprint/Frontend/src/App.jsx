import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import "./style.scss";
import './features/shared/global.scss';
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./features/auth/auth.provider.jsx";

const App = () => {
  return (
    <>
      {" "}
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <Toaster />
    </>
  );
};

export default App;

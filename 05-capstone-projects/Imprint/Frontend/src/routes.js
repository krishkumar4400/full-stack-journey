import { BrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const routes = BrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <LoginPage />,
  },
]);

export default routes;

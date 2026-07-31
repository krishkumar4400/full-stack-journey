import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import "./style.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {" "}
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
};

export default App;

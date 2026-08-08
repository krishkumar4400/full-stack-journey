import React from "react";
import FaceExpression from "./features/expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import routes from "./routes.jsx";
import AuthProvider from "./features/auth/Auth.provider.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={routes}>
          
        </RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;

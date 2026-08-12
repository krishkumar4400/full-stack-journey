import React from "react";
import FaceExpression from "./features/expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import routes from "./routes.jsx";
import AuthProvider from "./features/auth/Auth.provider.jsx";
import { SongContextProvider } from "./features/home/song.provider.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <SongContextProvider>
          <RouterProvider router={routes} />
        </SongContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;

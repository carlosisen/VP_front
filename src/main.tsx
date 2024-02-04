import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main.tsx";
import Maintenance from "./pages/maintenance.tsx";
import App from "./App.tsx";
import "@styles/global.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>UPS, PARECE QUE TE HAS PERDIDO EN EL MULTIVERSO</h1>,

    children: [
      {
        errorElement: <h1>UPS, PARECE QUE TE HAS PERDIDO EN EL MULTIVERSO</h1>,
        children: [
          {
            index: true,
            element: <Main />,
          },
          {
            path: "reseñas",
            element: <Maintenance />,
          },
          {
            path: "portfolio",
            element: <Maintenance />,
          },
          {
            path: "quienes-somos",
            element: <Maintenance />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

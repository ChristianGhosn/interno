import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { About, Home, PageNotFound, Services } from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/interno",
    element: <App />,

    children: [
      { path: "/interno/", element: <Home /> },
      {
        path: "/interno/services",
        element: <Services />,
      },
      { path: "/interno/about", element: <About /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

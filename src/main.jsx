import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },

    ],
  },
  {
    path: "*",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

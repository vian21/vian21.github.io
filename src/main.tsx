import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  About,
  Contacts,
  Projects,
  Cv,
  Terminal,
  NotFound,
} from "./pages";

import "./index.css";
import App from "./App";

//create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
    ],
  },

  {
    path: "/shell",
    element: <Terminal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

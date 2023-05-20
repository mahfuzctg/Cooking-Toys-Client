import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import All from "./Components/All";
import Error from "./Components/Error";
import About from "./Components/About";
import Login from "./Components/Login";
import Resister from "./Components/Resister";
import AuthProviders from "./Providers/AuthProviders";
import PrivateRoute from "./Providers/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <PrivateRoute>
        <Blog></Blog>
      </PrivateRoute>
    ),
  },
  {
    path: "/all",
    element: (
      <PrivateRoute>
        <All></All>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Resister></Resister>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

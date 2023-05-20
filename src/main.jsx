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
import AddToys from "./Components/AddToys";
import MyToys from "./Components/MyToys";
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
    element: <Blog></Blog>,
  },
  {
    path: "/all",
    element: <All></All>,
    loader: () => fetch("http://localhost:5000/addtoys"),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Resister></Resister>,
  },
  {
    path: "/addtoys",
    element: <AddToys></AddToys>,
  },
  {
    path: "/mytoys",
    element: <MyToys></MyToys>,
    loader: () => fetch("http://localhost:5000/addtoys"),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

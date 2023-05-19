import React, { Children, useContext } from "react";
import { authContext } from "./AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;

import React, { Children, useContext } from "react";
import { authContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        Loading...
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{ from: location }} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;

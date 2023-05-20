import React, { Children, useContext } from "react";
import { authContext } from "./AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

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
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;

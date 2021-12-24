import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? props.children : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  return <Route path="/" element={<Navigate to="/login" />} />;
};

export default PrivateRoute;

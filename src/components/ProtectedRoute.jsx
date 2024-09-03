import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles, userRole }) => {
  return allowedRoles.includes(userRole) ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;

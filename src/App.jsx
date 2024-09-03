import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteManager from './components/RouteManager';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [userRole, setUserRole] = useState(null); // This should come from user authentication

  const permissions = {
    createbook: ['admin', 'teacher'],
    viewbooks: ['staff', 'student'],
    updateBooks: ['admin', 'teacher'],
  };

  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<RouteManager />} />
          <Route
            path="/createbook"
            element={
              <ProtectedRoute allowedRoles={permissions.createbook} userRole={userRole}>
                <div>Create Book Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewbooks"
            element={
              <ProtectedRoute allowedRoles={permissions.viewbooks} userRole={userRole}>
                <div>View Books Page</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateBooks"
            element={
              <ProtectedRoute allowedRoles={permissions.updateBooks} userRole={userRole}>
                <div>Update Books Page</div>
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

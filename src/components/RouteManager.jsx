import React, { useState } from 'react';

const routes = ['createbook', 'viewbooks', 'updateBooks'];
const roles = ['admin', 'teacher', 'staff', 'student'];

const RouteManager = () => {
  const [permissions, setPermissions] = useState({
    createbook: [],
    viewbooks: [],
    updateBooks: [],
  });

  const handleCheckboxChange = (route, role) => {
    setPermissions(prevPermissions => {
      const updatedRoles = prevPermissions[route].includes(role)
        ? prevPermissions[route].filter(r => r !== role)
        : [...prevPermissions[route], role];
      return { ...prevPermissions, [route]: updatedRoles };
    });
  };

  const assignRoute = () => {
    // Logic to assign routes to roles, such as an API call
    console.log('Permissions assigned:', permissions);
  };

  return (
    <div className="p-4">
      {routes.map(route => (
        <div key={route} className="mb-4">
          <h3 className="font-bold">{route}</h3>
          <div className="flex space-x-4">
            {roles.map(role => (
              <label key={role} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={permissions[route].includes(role)}
                  onChange={() => handleCheckboxChange(route, role)}
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={assignRoute}
      >
        Assign Routes
      </button>
    </div>
  );
};

export default RouteManager;

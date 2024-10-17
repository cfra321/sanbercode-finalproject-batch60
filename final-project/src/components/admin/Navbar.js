import React, { useState } from 'react';

const NavbarDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between border-b border-gray-700 relative">
      <div className="flex items-center">

       <img src="https://cdn-icons-png.flaticon.com/512/408/408784.png" alt="Logo" className="h-10 w-10 mr-3" />
      <h1 className="text-lg font-bold">ITCreativeHub Dashboard</h1>
      </div>
      {/* Profile Section */}
      <div className="relative">
        <div className="flex items-center cursor-pointer" onClick={handleDropdownToggle}>
          <img 
            src="https://cms.halovina.com/wp-content/uploads/2021/09/anonymous-function-go.png" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-2">Username</span>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
            <div className="absolute inset-0 z-10"></div>
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarDashboard;

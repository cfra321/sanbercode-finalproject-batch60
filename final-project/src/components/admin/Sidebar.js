// src/components/admin/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const SidebarDashboard = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`relative ${isOpen ? 'w-64' : 'w-16'} transition-width bg-gray-100 duration-300 ease-in-out`}>
      {/* Tombol Toggle Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-20 text-white bg-gray-900 p-2 rounded-md focus:outline-none"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white h-full p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy" className="block p-2 hover:bg-gray-700">List Data Table</Link>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy/form" className="block p-2 hover:bg-gray-700">Data Form</Link>
            </li>
            <li>
              <Link to="/dashboard/change-password" className="block p-2 hover:bg-gray-700">Change Password</Link>
            </li>
            {/* Tambahkan menu lainnya di sini */}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SidebarDashboard;

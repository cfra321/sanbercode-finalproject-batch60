// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cookies from 'js-cookie';
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';
import Vacancy from './pages/Vacancy';
import Dashboard from './pages/admin/Dashboard';
import ChangePassword from './pages/admin/ChangePassword';
import SidebarDashboard from './components/admin/Sidebar';
import NavbarDashboard from './components/admin/Navbar';
import FooterDashboard from './components/admin/Footer';
import Layout from './components/Layout';
import LoginRoute from './components/LoginRoute';
import ListJobVacancy from './pages/admin/ListJobVacancy';
import JobForm from './pages/admin/JobForm';
import NoAuth from './pages/NoAuth';

const isAuthenticated = () => {
  return !!Cookies.get('token'); // Check if token exists in cookies
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<LoginRoute><Layout><LoginForm /></Layout></LoginRoute>} />
        <Route path="/signup" element={<Layout><RegisterForm /></Layout>} />
        <Route path="/vacancy" element={<Layout><Vacancy /></Layout>} />
        <Route path="/denied" element={<Layout><NoAuth /></Layout>} />
        <Route path="/forgot-password" element={<Layout><NoAuth /></Layout>} />

        {/* Private routes */}
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated() ? (
              <div className="flex flex-col h-screen">
                <NavbarDashboard />
                <div className="flex flex-1 overflow-hidden">
                  <SidebarDashboard isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                  <main className={`flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out ${isSidebarOpen}`}>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/change-password" element={<ChangePassword />} />
                      <Route path="list-job-vacancy" element={<ListJobVacancy />} />
                      <Route path="list-job-vacancy/form" element={<JobForm />} />
                      {/* Tambahkan lebih banyak route admin di sini */}
                    </Routes>
                  </main>
                </div>
                <FooterDashboard />
              </div>
            ) : (
              <Navigate to="/denied" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

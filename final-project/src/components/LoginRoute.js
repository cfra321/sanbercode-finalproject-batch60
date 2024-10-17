// src/components/LoginRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Assuming you're using js-cookie for cookies management

const LoginRoute = ({ children }) => {
  // Check for a valid token
  const token = Cookies.get('token');

  // If there is a token, redirect to the home page or another appropriate route
  if (token) {
    return <Navigate to="/" />;
  }

  // If no token, render the children (i.e., the login page)
  return children;
};

export default LoginRoute;

import React from "react";
import Footer from "../components/Footer";

const NoAuth = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-lg text-gray-600 mb-2">You don’t have permission to access this page.</p>
          <p className="text-sm text-gray-500 mb-6">Error 401: Unauthorized</p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/"}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Go Home
            </button>
            <button 
              onClick={() => window.location.href = "/login"}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NoAuth;

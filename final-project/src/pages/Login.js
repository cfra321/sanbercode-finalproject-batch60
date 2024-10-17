import React, { useState } from "react";
import Footer from "../components/Footer";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'; // Import SweetAlert

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://final-project-api-alpha.vercel.app/api/auth/login', {
        email,
        password
      });

      const { token } = response.data;
      Cookies.set('token', token);

      // SweetAlert jika login berhasil
      swal("Login Successful!", "Welcome back!", "success").then(() => {
        navigate('/'); // Redirect setelah menutup alert
      });

    } catch (error) {
      const errorMsg = error.response ? error.response.data.msg : 'Login failed';
      setError(errorMsg);

      // SweetAlert jika terjadi kesalahan
      swal("Login Failed", errorMsg, "error");
    }
  };

  return (
    <div className="flex flex-col">
      <main style={{ minHeight: "78vh" }} className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Sign in to your account
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "Hide" : "Show"} Password
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign in
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account yet?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginForm;

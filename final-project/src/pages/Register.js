import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image_url: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://final-project-api-alpha.vercel.app/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Account created successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                }).then(() => {
                    navigate('/login'); // Navigate to home page after confirming the alert
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.msg || 'An error occurred.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Network error, please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        }
    };

    return (
        <div className="flex flex-col">
            {/* Main content */}
            <main style={{ minHeight: "78vh" }} className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded">
                    <h2 className="text-2xl font-semibold text-center mb-6">Create a new account</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Nama */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                            <input
                                type="text"
                                name="image_url"
                                placeholder="https://example.com/your-image.jpg"
                                value={formData.image_url}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                                >
                                    {showPassword ? 'Hide' : 'Show'} Password
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" required />
                            <label className="text-gray-600 text-sm">
                                I accept the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Create an account
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RegisterForm;

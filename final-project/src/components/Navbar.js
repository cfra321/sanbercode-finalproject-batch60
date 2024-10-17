import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Cookies from 'js-cookie'; // Import Cookies

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    // Effect to handle resizing the window
    useEffect(() => {
        const handleResize = () => {
            // Reset isOpen to false if the window is wider than 600px
            if (window.innerWidth > 600) {
                setIsOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle logout function
    const handleLogout = () => {
        Cookies.remove('token'); // Remove token from cookies
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/408/408784.png" alt="Logo" className="h-10 w-10 mr-3" />
                    <Link to="/" className="text-gray-300 text-2xl font-semibold hover:text-gray-400">ITCreativeHub</Link>
                </div>

                <div className="flex items-center space-x-4 mx-auto">
                <Link to="/" className="text-gray-300 text-lg hover:text-gray-400 transition-colors">Home</Link>
                <Link to="/vacancy" className="text-gray-300 text-lg hover:text-gray-400 transition-colors">Vacancy</Link>
                <Link to="/" className="text-gray-300 text-lg hover:text-gray-400 transition-colors">About Us</Link>
                <Link to="/" className="text-gray-300 text-lg hover:text-gray-400 transition-colors">Tech</Link>
                <Link to="/" className="text-gray-300 text-lg hover:text-gray-400 transition-colors">Vision</Link>
                </div>

                {/* Menu Items - Always visible on larger screens */}
                <div className="hidden md:flex space-x-6">
                    
                    {!Cookies.get('token') && (
                        <Link to="/login" className="bg-gray-800 text-gray-300 px-5 py-2 rounded-full hover:bg-gray-700 transition-colors">Login</Link>
                    )}
                    {Cookies.get('token') && (
                        <span onClick={handleLogout} className="bg-gray-800 text-gray-300 px-5 py-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">Logout</span>
                    )}
                </div>

                {/* Hamburger Menu Icon - Only visible on small screens */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-gray-400 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Visible only when open and on small screens */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-4 rounded-lg">
                    <Link to="/" className="block text-gray-300 hover:text-gray-400">Home</Link>
                    <Link to="/vacancy" className="block text-gray-300 hover:text-gray-400">Vacancy</Link>
                    {!Cookies.get('token') && (
                        <Link to="/login" className="block bg-gray-700 text-gray-300 px-4 py-2 rounded-full mt-2 hover:bg-gray-600 transition-colors">Login</Link>
                    )}
                    {Cookies.get('token') && (
                        <span onClick={handleLogout} className="block bg-gray-700 text-gray-300 px-4 py-2 rounded-full mt-2 hover:bg-gray-600 transition-colors cursor-pointer">Logout</span>
                    )}
                    <Link to="/signup" className="block bg-gray-700 text-gray-300 px-4 py-2 rounded-full mt-2 hover:bg-gray-600 transition-colors">Register</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

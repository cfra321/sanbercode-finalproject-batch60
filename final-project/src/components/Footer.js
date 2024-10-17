import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://www.facebook.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.twitter.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.instagram.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://www.whatsapp.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                        <FaWhatsapp size={20} />
                    </a>
                </div>
                <p className="text-sm text-gray-400">&copy; 2024 ITCreativeHub by Kukuh Wicaksono. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

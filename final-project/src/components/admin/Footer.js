import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm text-gray-400">&copy; 2024 ITCreativeHub by Kukuh Wicaksono. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" aria-label="Facebook" className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.twitter.com" aria-label="Twitter" className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram" className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn" className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://www.whatsapp.com" aria-label="WhatsApp" className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

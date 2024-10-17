import React, { useEffect, useState } from 'react';

// Define your slides with title, description, button text, link, and background image URL
const slides = [
    {
        title: "A leading digital talent provider",
        description: "A leading digital talent provider for your career growth.",
        buttonText: "Get Started",
        buttonLink: "/signup",
        backgroundImage: "url('https://media.licdn.com/dms/image/D5612AQGHkooNg91HzA/article-cover_image-shrink_720_1280/0/1699376371609?e=2147483647&v=beta&t=OvL2zpiGml7c-SSSZugH582L4NU_AmJ1tQmFOm5FDds')",
    },
    {
        title: "Expand Your Skills",
        description: "Take your career to the next level with our specialized courses.",
        buttonText: "Learn More",
        buttonLink: "/vacancy",
        backgroundImage: "url('https://appsensi.com/wp-content/uploads/2023/06/jobdesk-1200x675.jpg')",
    },
    {
        title: "Join Our Community",
        description: "Connect with like-minded professionals and grow together.",
        buttonText: "Join Now",
        buttonLink: "/login",
        backgroundImage: "url('https://www.apa.org/images/title-find-a-job_tcm7-326283.jpg')",
    },
];

const Jumbotron = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every adjustable seconds

        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-96 rounded-lg overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: slides[currentSlide].backgroundImage }} // Set the background image
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-50">
                <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
                <p className="mt-2 text-lg">{slides[currentSlide].description}</p>
                <a 
                    href={slides[currentSlide].buttonLink} 
                    className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                    {slides[currentSlide].buttonText}
                </a>
            </div>

            {/* Navigation Buttons */}
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700 transition-colors"
                onClick={handlePreviousSlide}
            >
                &#10094; {/* Left Arrow */}
            </button>
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700 transition-colors"
                onClick={handleNextSlide}
            >
                &#10095; {/* Right Arrow */}
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'} transition-colors`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Jumbotron;

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-10 space-y-10 px-4">
      {/* First Section: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        {/* Text Section */}
        <div className="md:w-2/3 md:pr-6 w-full mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About ITCreativeHub</h1>
          <p className="text-base md:text-lg text-gray-600">
            ITCreativeHub empowers businesses with innovative digital solutions in 
          </p>
          <p className="text-base md:text-lg text-gray-600">
            software development, digital marketing, and design.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Our passionate team is dedicated to helping you achieve impactful results.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/3 w-full p-6 md:p-10 flex justify-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/408/408784.png" 
            alt="About Us" 
            className="w-2/3 md:w-2/4 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Section: Image Left, Text Right */}
      <div className="flex flex-col-reverse md:flex-row items-center mt-10">
        {/* Image Section */}
        <div className="md:w-1/3 w-full p-6 md:p-20 flex justify-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2234/2234697.png" 
            alt="Our History" 
            className="w-3/4 md:w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-2/3 w-full md:pl-6 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our History</h2>
          <p className="text-base md:text-lg text-gray-600">
            Since 2015, ITCreativeHub has grown from a small team into a trusted tech partner, 
          </p>
          <p className="text-base md:text-lg text-gray-600">
            transforming businesses and building global partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

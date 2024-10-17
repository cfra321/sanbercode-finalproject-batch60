import React from "react";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import OurPartners from "../components/Partner";
import Search from "../components/Search"; 
import Footer from "../components/Footer";
import LogoSlider from "../components/Keenslide";

const Home = () => {
  return (
    
    <div  className="flex flex-col bg-gray-100">
    
     
      <div className="container mx-auto text-center flex-grow p-6">
        
        <Jumbotron />

        <div className="flex justify-center space-x-4 mb-6">
          <h1 className="text-4xl font-bold text-blue-600">ITCreativeHub</h1>
        </div>

      
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">
            Available Job Listings
          </h2>
          <p className="text-lg mt-2 text-gray-800">
            Find your dream job here. We have a wide range of vacancies from various industries.
          </p>
          <p className="text-lg mt-2 text-gray-800">
            Explore the job listings and discover the opportunity that suits you!
          </p>
        
          <Search/>
          
        </div>
       
        <OurPartners />
        
      </div>
      
      
      <LogoSlider/>

      <About />
      <Footer />
      
    </div>
  );
};

export default Home;

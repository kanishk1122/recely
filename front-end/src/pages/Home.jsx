import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css'; // Assuming you have a separate CSS file for custom styles
import image2 from '../../public/Image/image2.png'; // Importing the image

const Home = () => {
  return (
    <div className='home flex flex-col md:flex-row justify-between items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white'>
      
      <div className='w-full md:w-[50%] p-8 mt-8'>
        <div className="container mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to the Apparel Submission Platform</h1>
          <p className="text-lg mb-6">Join our mission to reduce textile waste by submitting your unused or worn-out apparel for proper disposal, donation, or recycling. Together, we can make a positive impact on the environment!</p>
          <div className="info bg-white bg-opacity-20 p-6 rounded-lg mb-6 text-base border-2 border-[#070600] ">
            <p>Did you know that the fashion industry is responsible for 10% of global carbon emissions? Recycling clothes not only reduces waste but also saves resources like water and energy. Every small action counts in our fight to protect the planet.</p>
          </div>
          <Link to="/submit-apparel">
            <button className="text-white font-semibold py-3 px-6 rounded-lg duration-200 bg-[#EA526F]  border-2 border-[#070600] hover:rounded-3xll hover:border-dashed ">Submit Your Apparel</button>
          </Link>
        </div>
      </div>

      <div className='w-full md:w-[50%] flex justify-center items-center p-8'>
        <img src={image2} alt="Apparel Submission" className='w-[70%] md:w-[60%] object-cover rounded-3xl shadow-lg border-2 border-[#070600]' />
      </div>

    </div>
  );
};

export default Home;

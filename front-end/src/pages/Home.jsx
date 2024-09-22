// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/Home.css';

const Home = () => {
  return (
    <div className='p-4'>
      <h1>Welcome to the Apparel Submission Platform</h1>
      <p>Submit your unused or worn-out apparel for proper disposal, donation, or recycling.</p>
      <Link to="/submit-apparel">Submit Apparel</Link>
    </div>
  );
};

export default Home;

// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <header className='bg-[#279AF1] border-b-2 border-[#070600]  py-4 text-[#F7F7FF] fixed w-screen'>
      <nav>
        <div className='flex justify-between px-4 items-center text-[#F7F7FF]' >
          <div><Link to="/" className='  bg-[#F7F7FF] text-[#279AF1] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200  '>Home</Link></div>
          <div>
          {userInfo ? (
            <div className='flex justify-center items-center gap-4 text-[#F7F7FF]'>
              <div><Link to="/submit-apparel" className='bg-[#F7F7FF] text-[#279AF1] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200 '>Submit Apparel</Link></div>
              <button onClick={logoutHandler} className='bg-[#F7F7FF] text-[#279AF1] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200 ' >Logout</button>
            </div>
          ) : (
            <div  className='flex justify-center items-center gap-4'>
              <div><Link to="/login" className='  bg-[#F7F7FF] text-[#279AF1] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200  '>Login</Link></div>
              <div><Link to="/register" className='bg-[#F7F7FF] text-[#279AF1] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200 '>Register</Link></div>
            </div>
          )}
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;

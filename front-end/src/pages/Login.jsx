import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { API_URL } from "../Constants/apiurl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_URL}/api/users/login1`, {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container flex items-center justify-center h-screen bg-gray-100">
      <div className="login-form bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={submitHandler}>
          
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            
            className='bg-[#279AF1] w-full text-[#F7F7FF] border-2 border-[#070600] px-3 py-2 rounded-xl font-semibold  hover:rounded-2xl duration-200 '
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Register.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Constants/apiurl";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_URL}/users/register`, {
        name,
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="register-container flex items-center justify-center h-screen bg-gray-100 ">
      <div className="register-form bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

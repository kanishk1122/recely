import React, { useState } from "react";
import axios from "axios";
// import "../assets/css/SubmitApparel.css";
import { API_URL } from "../Constants/apiurl";

const SubmitApparel = () => {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [preferredAction, setPreferredAction] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    };

    try {
      const { data } = await axios.post(
        `${API_URL}/apparel`,
        { type, condition, preferredAction },
        config
      );
      alert("Apparel submitted successfully");
    } catch (error) {
      alert("Error submitting apparel");
    }
  };

  return (
    <div className="submit-apparel-container flex w-full items-center justify-center h-screen">
      <div className="submit-apparel-form bg-white p-8 rounded-lg shadow-lg w-[70vw]  mt-8 flex justify-between">
        <h1 className="text-3xl font-semibold text-center mb-6 " style={{ color: "#23B5D3" }}>
          Submit Apparel
        </h1>
        <form onSubmit={submitHandler}>
          <div className="form-group mb-4 w-[300px]">
            <label className="block text-gray-700 mb-2">Type</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Condition</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Preferred Action</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={preferredAction}
              onChange={(e) => setPreferredAction(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            style={{ backgroundColor: "#23B5D3" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitApparel;

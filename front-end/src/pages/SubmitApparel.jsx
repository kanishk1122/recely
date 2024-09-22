// src/pages/SubmitApparel.js
import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Submitappre.css";
import {API_URL} from "../Constants/apiurl";

const SubmitApparel = () => {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [preferredAction, setPreferredAction] = useState("");
  console.log(API_URL);

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
    <div>
      <h1>Submit Apparel</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label>Condition</label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
        <div>
          <label>Preferred Action</label>
          <input
            type="text"
            value={preferredAction}
            onChange={(e) => setPreferredAction(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitApparel;

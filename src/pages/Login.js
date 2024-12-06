import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://13.60.230.8:8000/api/token/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User logged in:", response.data);

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2 style={headerStyle}>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  background: "#f4f4f4",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  maxWidth: "400px",
  width: "100%",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "teal",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Login;

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
      const response = await axios.post("http://13.60.13.241:8000/api/token/", formData);
      console.log("User logged in:", response.data);

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      navigate("/special");
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
  background: "url('https://images2.alphacoders.com/121/1214052.png') no-repeat center center fixed",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const formStyle = {
  maxWidth: "400px",
  width: "100%",
  backgroundColor: "white",
  padding: "40px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",  // Обеспечиваем вертикальное выравнивание
  alignItems: "center",      // Центрируем элементы формы
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const inputStyle = {
  width: "90%",
  padding: "12px",          // Увеличиваем внутренний отступ для комфортного ввода
  margin: "10px 0",         // Отступы между полями ввода
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "red",
  color: "white",
  padding: "12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Login;

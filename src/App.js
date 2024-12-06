import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SpecialPage from "./pages/SpecialPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div style={{ marginTop: '60px' }}> {/* Добавляем отступ сверху для контента */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/special" element={<SpecialPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

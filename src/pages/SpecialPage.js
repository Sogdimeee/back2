import React from "react";
import Game from "../components/Game";

const SpecialPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://wallpapercg.com/download/f1-cars-3840x2160-18246.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "20px",
          margin: 0,
          fontSize: "2.5em",
        }}
      >
        F1 Special Page
      </h1>
      <div style={{ marginTop: "30px" }}>
        <Game />
      </div>
    </div>
  );
};

export default SpecialPage;
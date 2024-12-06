// В компоненте NewsCard
import React from "react";

const NewsCard = ({ title, imageUrl }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "20px",
        transition: "transform 0.3s ease-in-out",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Увеличение при наведении
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} // Восстановление размера
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;

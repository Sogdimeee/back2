import React, { useState, useEffect } from "react";

const Game = () => {
  const [carPosition, setCarPosition] = useState({ x: 1, y: 9 }); // Начальная позиция (ряд, колонка)
  const map = [
    "11111111111111111111",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000011111111000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "10000000000000000001",
    "11111111111111111111",
  ];

  const gridSize = 30; // Размер одной ячейки

  const handleKeyPress = (e) => {
    const newPos = { ...carPosition };

    // Управление машинкой
    if (e.key === "ArrowUp") newPos.y -= 1;
    if (e.key === "ArrowDown") newPos.y += 1;
    if (e.key === "ArrowLeft") newPos.x -= 1;
    if (e.key === "ArrowRight") newPos.x += 1;

    // Проверка выхода за границы карты
    if (
      newPos.y < 0 ||
      newPos.y >= map.length ||
      newPos.x < 0 ||
      newPos.x >= map[0].length
    ) {
      return;
    }

    // Проверка на стены
    if (map[newPos.y][newPos.x] === "1") {
      return;
    }

    // Обновление позиции
    setCarPosition(newPos);
  };

useEffect(() => {
  window.addEventListener("keydown", handleKeyPress);

  // Clean up the event listener when the component unmounts or dependencies change
  return () => window.removeEventListener("keydown", handleKeyPress);
}, [handleKeyPress, carPosition]);  // Include handleKeyPress and carPosition in the dependency array

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 60px)", // Учитывается высота навбара
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${map[0].length}, ${gridSize}px)`,
        }}
      >
        {map.flatMap((row, rowIndex) =>
          row.split("").map((cell, colIndex) => {
            const isCarHere =
              carPosition.x === colIndex && carPosition.y === rowIndex;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{
                  width: gridSize,
                  height: gridSize,
                  backgroundColor:
                    cell === "1" ? "gray" : cell === "0" ? "white" : "transparent", // Дорога белая
                  border: "1px solid black",
                  position: "relative",
                }}
              >
                {isCarHere && (
                  <img
                    src="https://www.pngarts.com/files/4/Lightning-McQueen-Disney-Cars-Free-PNG-Image.png"
                    alt="Car"
                    style={{
                      position: "absolute",
                      width: "30px", // Увеличиваем размер машинки
                      height: "30px", // Увеличиваем размер машинки
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Game;

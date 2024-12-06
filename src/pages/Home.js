import React from "react";
import NewsCard from "../components/NewsCard";

const news = [
  {
    title: "Sainz says helping Ferrari to win constructors’ title would be ‘perfect goodbye’ in final race together",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188332117",
  },
  {
    title: "Doohan reacts to ‘amazing’ early F1 debut as he outlines Alpine’s expectations",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188341186",
  },
  {
    title: "F1 TV nominated for Apple TV App of the Year award",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Qatar/2187744376",
  },
  {
    title: "Lawson reveals he’ll know about his future ‘next week’ as he claims he ‘feels ready’ to drive for Red Bull",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188343114",
  },
  {
    title: "‘There’s still time to go and win some races’ – Magnussen opens up on his exciting next chapter with BMW",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Abu%20Dhabi/Formula%201%20header%20template%20(7)",
  },
  {
    title: "NEED TO KNOW: The most important facts, stats and trivia ahead of the 2024 Abu Dhabi Grand Prix",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Abu%20Dhabi/Need_To_Know_Abu_Dhabi_05122024",
  },
  {
    title: "AS IT HAPPENED: Follow all the build-up ahead of the Abu Dhabi Grand Prix weekend",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188352900",
  },
  {
    title: "He’s made it personal’ – Russell accuses Verstappen of ‘crossing a line’ over Qatar stewards’ room fallout",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Abu%20Dhabi/Formula%201%20header%20template%20(8)",
  }
];

const Home = () => (
  <>
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url('https://images2.alphacoders.com/135/1352897.png')`,
        height: "400px",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        justifyContent: "center",  // Горизонтальное выравнивание
        alignItems: "center",      // Вертикальное выравнивание
      }}
    >
      <h1 style={{ animation: "jump 2s infinite", fontSize: "100px" }}>Cool Race</h1>
    </div>
    <div
      style={{
        paddingTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {news.map((item, index) => (
        <NewsCard key={index} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  </>
);


export default Home;

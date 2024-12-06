import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const news = [
  {
    id: 1,
    title: "5 things everyone should know about menopause",
    imageUrl: "https://sukhipariwarclinic.com.np/wp-content/uploads/2024/09/what-is-menopause-and-what-happens-during-menopause.jpg",
    content: "Despite the fact that around half of the world’s population goes through menopause, misconceptions about this key stage in people’s reproductive lives still abound. This is often due to social and educational barriers to accessing relevant information. What are some key things that everyone should know about menopause? In Conversation, our expert guest helps us answer this question.",
  },
  {
    id: 2,
    title: "Is coffee good for your heart health? 3 studies offer insights",
    imageUrl: "https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329",
    content: "Studies on caffeine’s effects on heart health have gained interest in recent years. One crucial question remains: How much caffeine is too much?\n" +
        "In this roundup of the latest studies exploring the effects of caffeine on cardiovascular health, Medical News Today compiles the most recent evidence to highlight key findings and takeaways.",
  },
  {
    id: 3,
    title: "Carbs or fats for breakfast? Which is best for healthy weight in men vs women?",
    imageUrl: "https://static1.squarespace.com/static/59f0e6beace8641044d76e9c/5a09a41dec212d1131bde7ee/61893fbaf1174e2d37e971ec/1729861532031/Social+Smart+carbs.jpeg?format=1500w",
    },
  {
    id: 4,
    title: "Managing chronic inflammation with psoriasis",
    imageUrl: "https://theapprenticedoctor.com/wp-content/uploads/2022/03/Depositphotos_105245766_XL-scaled.jpg",
  },
  {
    id: 5,
    title: "Eating more plant protein may lower the risk of heart disease as much as 27%",
    imageUrl: "https://plantbasednews.org/app/uploads/2021/07/plant-based-news-vegan-food-highest-protein.jpg",
    },
  {
    id: 6,
    title: "Ultra-processed foods may trigger, worsen psoriasis flare-ups",
    imageUrl: "https://drvegan.com/cdn/shop/articles/ultra_processed_food.jpg?v=1695929516",
    },
  {
    id: 7,
    title: "How to preserve muscle mass on weight-loss drugs like Wegovy",
    imageUrl: "https://www.spatzmedical.com/wp-content/uploads/2024/10/AdobeStock_715946410_Editorial_Use_Only-1200x557.jpg",
    },
  {
    id: 8,
    title: "Losing muscle may increase risk of developing dementia",
    imageUrl: "https://www.hopehealthco.org/wp-content/uploads/2023/06/iStock-1400657957.jpg",
    },
];


const Home = () => (
  <>
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url('https://wallpapercave.com/wp/wp2968506.jpg')`,
        height: "400px",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          animation: "jump 2s infinite",
          fontSize: "50px",
          textAlign: "center",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        Hello, we'll care about your health
      </h1>
    </div>
    <div
      style={{
        paddingTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
        paddingBottom: "40px",
      }}
    >
      {news.map((item, index) => (
        <Link to={`/news/${item.id}`} key={index} style={{ textDecoration: 'none' }}>
          <NewsCard title={item.title} imageUrl={item.imageUrl} />
        </Link>
      ))}
    </div>
  </>
);

export default Home;

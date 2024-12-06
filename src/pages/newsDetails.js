import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const newsDetails = [
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
    content: "A carbohydrate-rich breakfast for men and a fat-rich breakfast for women gets the day off to a good start, a new study suggests.\n" +
        "While women store more fat than men, they also burn it faster to obtain energy, according to computer modeling used in the study.\n" +
        "Metabolic differences between men and women have not been as fully studied due to research’s historically greater interest in men’s health.",
  },
  {
    id: 4,
    title: "Managing chronic inflammation with psoriasis",
    imageUrl: "https://theapprenticedoctor.com/wp-content/uploads/2022/03/Depositphotos_105245766_XL-scaled.jpg",
    content: "Although the exact cause of psoriasis is unknown, doctors consider it an immune-mediated inflammatory disease. This means that inflammation is at the root of this condition.",
  },
  {
    id: 5,
    title: "Eating more plant protein may lower the risk of heart disease as much as 27%",
    imageUrl: "https://plantbasednews.org/app/uploads/2021/07/plant-based-news-vegan-food-highest-protein.jpg",
    content: "A recent study examined the potential effects that consuming different forms of protein may have on heart health.\n" +
        "The researchers were interested in the ratio of plant vs. animal-based protein people consumed and their long-term health outcomes.\n" +
        "The researchers learned that consuming a higher ratio of plant to animal protein could lead to a reduction of both coronary heart disease (CHD) and cardiovascular disease (CVD).",
  },
  {
    id: 6,
    title: "Ultra-processed foods may trigger, worsen psoriasis flare-ups",
    imageUrl: "https://drvegan.com/cdn/shop/articles/ultra_processed_food.jpg?v=1695929516",
    content: "People eating diets high in ultra-processed foods are more likely to have active cases of psoriasis, according to a new research letter.\n" +
        "This research appears to be the first to link these foods with psoriasis flareups, whose causes are not yet fully understood.",
  },
  {
    id: 7,
    title: "How to preserve muscle mass on weight-loss drugs like Wegovy",
    imageUrl: "https://www.spatzmedical.com/wp-content/uploads/2024/10/AdobeStock_715946410_Editorial_Use_Only-1200x557.jpg",
    content: "The development of glucagon-like peptide-1 (GLP-1) drugs, such as Wegovy and Zepbound, has ushered in a new era in weight management. While these drugs can lead to significant weight loss, researchers and medical professionals have raised concerns about the accompanying loss of muscle tissue. This Special Feature discusses the challenges associated with assessing changes in muscle mass that accompany GLP-1 drug-induced weight loss, the potential impact of muscle mass loss, and how to preserve muscle mass.",
  },
  {
    id: 8,
    title: "Losing muscle may increase risk of developing dementia",
    imageUrl: "https://www.hopehealthco.org/wp-content/uploads/2023/06/iStock-1400657957.jpg",
    content: "Sarcopenia describes the muscle loss that often occurs in older age.\n" +
        "Individuals with higher levels of muscle loss are more at risk of adverse health outcomes, including falls and fractures.\n" +
        "The latest study concludes that sarcopenia is also linked to an increased risk of cognitive decline and dementia.",
  },
];

const NewsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const isAuthenticated = localStorage.getItem('access_token');

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const newsDetail = newsDetails.find(item => item.id === parseInt(id));
      setNewsItem(newsDetail);
    }
  }, [id, isAuthenticated, navigate]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        style={{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "cover" }}
      />
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;

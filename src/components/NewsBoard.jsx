import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ category }) {
  let [articles, setArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const DEFAULT_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;

  useEffect(() => {
    let fetchArticles = async () => {
      try {
        const response = await fetch(`${DEFAULT_URL}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchArticles();
  }, [category]);

  return (
    <div>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

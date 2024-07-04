import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ searchTerm, category }) {
  let [articles, setArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const DEFAULT_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;

  useEffect(() => {
    let fetchArticles = async () => {
      let url = DEFAULT_URL;
      if (searchTerm) {
        url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`;
      }
      try {
        const response = await fetch(`${url}`);
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
  }, [category, searchTerm]);

  return (
    <div>
      <h1>LATEST NEWS</h1>
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

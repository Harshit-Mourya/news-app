import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

export default function NewsBoard({ searchTerm, category }) {
  let [articles, setArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const DEFAULT_URL = `https://api.currentsapi.services/v1/search?category=${category}&apiKey=${API_KEY}`;
  let url = DEFAULT_URL;
  if (searchTerm) {
    url = `https://api.currentsapi.services/v1/search?keywords=${searchTerm}&apiKey=${API_KEY}`;
  }
  useEffect(() => {
    let fetchArticles = async () => {
      try {
        console.log(searchTerm);
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setArticles(data.news);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchArticles();
  }, [category, searchTerm]);

  return (
    <>
      <h1 className="news-heading">
        LATEST <span>NEWS</span>
      </h1>
      {articles.length == 0 && (
        <h2 className="error-h2">Error: Couldn't find page &#x2718;</h2>
      )}
      <div className="NewsBoard">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

export default function NewsBoard() {
  let [articles, setArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const DEFAULT_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

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
  }, []);

  return <div>NewsBoard</div>;
}

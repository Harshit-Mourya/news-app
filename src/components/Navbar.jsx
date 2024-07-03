import "./Navbar.css";
import searchImg from "../assets/search.png";
import { useState } from "react";

export default function Navbar({ updateNews }) {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const API_URL = "https://newsapi.org/v2/everything";

  let [searchItem, setSearchItem] = useState("");

  let getNews = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${searchItem}&from=2024-06-03&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
    } catch (err) {}
  };

  let handleChange = (evt) => {
    setSearchItem(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(searchItem);
      let news = await getNews();
      console.log(news);
      updateNews(news);
    } catch (err) {}
  };

  return (
    <header className="Navbar">
      <img src="" alt="Logo" />
      <div>
        <ul className="navbar-nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <select name="" id="" className="custom-dropdown">
              <option value="">World</option>
              <option value="">Business</option>
              <option value="">Technology</option>
              <option value="">Sports</option>
              <option value="">Entertainment</option>
            </select>
          </li>
        </ul>
      </div>
      <form action="" className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={handleChange}
        />
        <button>
          <img src={searchImg} alt="" />
        </button>
      </form>
    </header>
  );
}

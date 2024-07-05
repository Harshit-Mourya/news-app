import "./Navbar.css";
import searchImg from "../assets/search.png";
import logo from "../assets/logo-news.png";
import { useState } from "react";

export default function Navbar({ onSearch, setCategory }) {
  const [searchItem, setSearchItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  let handleChange = (evt) => {
    setSearchItem(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchItem);
    onSearch(searchItem);
    setSearchItem("");
  };

  const handleLogoClick = () => {
    console.log("logo clicked");
    onSearch("");

    setCategory("general");
  };

  const handleCategoryClick = (category) => {
    console.log("category clicked");
    onSearch("");

    setCategory(category);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Navbar">
      <img src={logo} alt="Logo" onClick={handleLogoClick} className="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger-icon">
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>
      </div>
      <div className={`navbar-items ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li>
            <div
              onClick={() => handleCategoryClick("technology")}
              className="navOption"
            >
              Technology
            </div>
          </li>
          <li>
            <div
              onClick={() => handleCategoryClick("business")}
              className="navOption"
            >
              Business
            </div>
          </li>
          <li>
            <div
              onClick={() => handleCategoryClick("health")}
              className="navOption"
            >
              Health
            </div>
          </li>
          <li>
            <div
              onClick={() => handleCategoryClick("sports")}
              className="navOption"
            >
              Sports
            </div>
          </li>
          <li>
            <div
              onClick={() => handleCategoryClick("entertainment")}
              className="navOption"
            >
              Entertainment
            </div>
          </li>
          <li>
            <div
              onClick={() => handleCategoryClick("science")}
              className="navOption"
            >
              Science
            </div>
          </li>
        </ul>
      </div>
      <form className="navbar-search" onSubmit={handleSubmit}>
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

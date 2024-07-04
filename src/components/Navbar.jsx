import "./Navbar.css";
import searchImg from "../assets/search.png";
import { useState } from "react";

export default function Navbar({ setCategory, onSearch }) {
  const [searchItem, setSearchItem] = useState("");

  let handleChange = (evt) => {
    setSearchItem(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(searchItem);
  };

  return (
    <header className="Navbar">
      <img src="" alt="Logo" onClick={() => setCategory("general")} />
      <div>
        <ul className="navbar-nav">
          <li>
            <div
              onClick={() => setCategory("technology")}
              className="navOption"
            >
              Technology
            </div>
          </li>
          <li>
            <div onClick={() => setCategory("business")} className="navOption">
              Business
            </div>
          </li>
          <li>
            <div onClick={() => setCategory("health")} className="navOption">
              Health
            </div>
          </li>
          <li>
            <div onClick={() => setCategory("sports")} className="navOption">
              Sports
            </div>
          </li>
          <li>
            <div
              onClick={() => setCategory("entertainment")}
              className="navOption"
            >
              Entertainment
            </div>
          </li>
          <li>
            <div onClick={() => setCategory("science")} className="navOption">
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

import "./NewsItem.css";
import newsImg from "../assets/news.jfif";

export default function NewsItem({ title, description, src, url }) {
  return (
    <div className="card">
      <img src={src ? src : newsImg} alt={title} />
      <div className="cardBody">
        <p className="card-title">{title}</p>
        <p className="card-content">{description}</p>
        <a href={url}>Read more</a>
      </div>
    </div>
  );
}

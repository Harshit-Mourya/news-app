import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import Footer from "./Footer";
import { useState } from "react";

export default function NewsApp() {
  let [searchTerm, setSearchTerm] = useState("");
  let [category, setCategory] = useState("general");
  let onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={onSearch} setCategory={setCategory} />
      <NewsBoard searchTerm={searchTerm} category={category} />
      <Footer />
    </>
  );
}

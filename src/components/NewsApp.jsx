import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import Footer from "./Footer";
import { useState } from "react";

export default function NewsApp() {
  let [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  );
}

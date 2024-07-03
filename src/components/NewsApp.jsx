import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import Footer from "./Footer";
import { useState } from "react";

export default function NewsApp() {
  let [newsInfo, updateNewsInfo] = useState();

  let updateNews = (news) => {
    updateNewsInfo(news);
  };
  return (
    <>
      <Navbar updateNews={updateNews} />
      <NewsBoard />
      <Footer />
    </>
  );
}

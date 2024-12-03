import { useEffect } from "react";
import { useState } from "react";
import { NewsItem } from "./NewsItem";

const URL1 = "https://newsapi.org/v2/top-headlines";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const NewsBoard = ({ category }) => {
  const [articles, setArtcles] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(
        `${URL1}?country=us&category=${category}&apiKey=${VITE_API_KEY}`
      );
      const data = await res.json();
      setArtcles(data.articles);
    }
    fetchNews();
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-secondary">News</span>
      </h2>
      <div className="container">
        {" "}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-3">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              URL={news.url}
              src={news.urlToImage}
            />
          ))}
        </div>
      </div>

      {console.log(articles)}
    </div>
  );
};

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const categories = ["technology", "business", "health", "science", "sports", "entertainment"];

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      let url;
      if (category === "trending") {
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">{category === "trending" ? "Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</span> News</h2>
      <div className="news-grid">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            category={category === "trending" ? news.category : category} // Pass category to NewsItem
          />
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;

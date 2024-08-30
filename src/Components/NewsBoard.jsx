import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      // Check localStorage for cached articles
      const cachedData = localStorage.getItem(`articles-${category}`);
      if (cachedData) {
        const { articles: cachedArticles, timestamp } = JSON.parse(cachedData);
        const expirationTime = new Date(timestamp + 60 * 60 * 1000);

        if (new Date() < expirationTime) {
          setArticles(cachedArticles);
        }
      }

      try {
        let url;
        if (category === "trending") {
          url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        } else {
          url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);

        // Cache the fetched articles with timestamp
        localStorage.setItem(`articles-${category}`, JSON.stringify({
          articles: data.articles,
          timestamp: Date.now()
        }));

      } catch (error) {
        if (error.message === 'Network response was not ok') {
          setError('Failed to fetch news articles. Please check your internet connection and try again later.');
        } else {
          setError('An error occurred while fetching news articles. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  const filteredArticles = searchQuery
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles;

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">{category === "trending" ? "Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</span> News
      </h2>
      <div className="news-grid">
        {filteredArticles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            category={category === "trending" ? news.category : category}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;

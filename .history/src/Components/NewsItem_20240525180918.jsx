// import image from '../assets/image.jpg';

// const NewsItem = ({ title, description, src, url, category }) => {
//     const imgHeight = "200px";

//     return (
//         <div className="card news-card bg-light text-dark mb-3 mx-3 px-2 position-relative">
//             <span className="badge-category">{category}</span>
//             <img 
//                 src={src ? src : image} 
//                 className="card-img-top"
//                 alt="..."
//                 style={{ height: imgHeight }}
//             />
//             <div className="card-body">
//                 <div>
//                     <h5 className="card-title">{title.slice(0, 50)}</h5>
//                     <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with the latest news updates from around the world. Get insights on the most pressing issues and trending topics."}</p>
//                 </div>
//                 <div className="btn-group">
//                     <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
//                     <button className="btn btn-outline-light">Share</button>
//                     <button className="btn btn-outline-light">Bookmark</button>
//                     <button className="btn btn-outline-light">Like</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsItem;


import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      // Check cache first
      const cachedArticles = localStorage.getItem(`articles-${category}`);
      if (cachedArticles) {
        setArticles(JSON.parse(cachedArticles));
        setLoading(false);
        return;
      }

      try {
        let url;
        if (category === "trending") {
          url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
        } else {
          url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);

        // Cache the articles
        localStorage.setItem(`articles-${category}`, JSON.stringify(data.articles));
      } catch (error) {
        // Check for specific errors and display informative messages
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
        {articles.map((news, index) => (
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
}

export default NewsBoard;
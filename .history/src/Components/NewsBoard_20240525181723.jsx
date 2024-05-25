// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       setError(null);

//       // Check cache first
//       const cachedArticles = localStorage.getItem(`articles-${category}`);
//       if (cachedArticles) {
//         setArticles(JSON.parse(cachedArticles));
//         setLoading(false);
//         return;
//       }

//       try {
//         let url;
//         if (category === "trending") {
//           url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
//         } else {
//           url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         }
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setArticles(data.articles);

//         // Cache the articles
//         localStorage.setItem(`articles-${category}`, JSON.stringify(data.articles));
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [category]);

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center">Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">{category === "trending" ? "Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</span> News
//       </h2>
//       <div className="news-grid">
//         {articles.map((news, index) => (
//           <NewsItem
//             key={index}
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//             category={category === "trending" ? news.category : category}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsBoard;




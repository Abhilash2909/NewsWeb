import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            <div className="news-grid">
                {articles.map((news, index) => {
                    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })}
            </div>
        </div>
    );
}

export default NewsBoard;


// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const categories = ["technology", "business", "health", "science", "sports", "entertainment"];

// const NewsBoard = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         const fetchArticles = async () => {
//             let allArticles = [];
//             for (let category of categories) {
//                 let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//                 let response = await fetch(url);
//                 let data = await response.json();
//                 allArticles = [...allArticles, ...data.articles.map(article => ({ ...article, category }))];
//             }
//             setArticles(allArticles);
//         };

//         fetchArticles();
//     }, []);

//     return (
//         <div>
//             <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//             <div className="news-grid">
//                 {articles.map((news, index) => {
//                     return (
//                         <NewsItem
//                             key={index}
//                             title={news.title}
//                             description={news.description}
//                             src={news.urlToImage}
//                             url={news.url}
//                             category={news.category} // Pass category to NewsItem
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default NewsBoard;

import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div className="news-grid">
            {articles.map((news, index) => (
                <NewsItem 
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
}

export default NewsList;

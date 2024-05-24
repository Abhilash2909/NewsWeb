import image from '../assets/image.jpg';

const NewsItem = ({ title, description, src, url }) => {
    // Optionally adjust image height based on content length or other criteria
    const imgHeight = description && description.length > 60 ? "150px" : "200px";

    return (
        <div className="card news-card bg-dark text-light mb-3 mx-3 px-2" style={{ maxWidth: "345px", height: "100%" }}>
            <img 
                src={src ? src : image} 
                className="card-img-top" 
                alt="..." 
                style={{ height: imgHeight }} /* Apply conditional height */
            />
            <div className="card-body">
                <div>
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with the latest news updates from around the world. Get insights on the most pressing issues and trending topics."}</p>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;

// NewsItem.jsx

import image from '../assets/image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';

const NewsItem = ({ title, description, src, url, category }) => {
  const imgHeight = "200px";

  // Function to truncate text to a specified number of lines
  const truncateText = (text, maxLines) => {
    const lines = text.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + '...';
    }
    return text;
  };

  return (
    <div className="card news-card mb-3 mx-3 px-2 position-relative">
      <span className="badge-category">{category}</span>
      <div className="news-card-inner">
        <img
          src={src ? src : image}
          className="card-img-top"
          alt="..."
          style={{ height: imgHeight }}
        />
        <div className="card-overlay"></div>
        <div className="card-body">
          <h5 className="card-title">{truncateText(title, 3)}</h5>
          <p className="card-text">
            {truncateText(description
              ? description
              : "Stay informed with the latest news updates from around the world. Get insights on the most pressing issues and trending topics.", 3)}
          </p>
        </div>
        <div className="card-footer">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark align-self-start">Read More</a>
          <div className="btn-group align-self-end">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faShare} />
            </button>
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

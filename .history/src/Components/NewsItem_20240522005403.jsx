import image from '../assets/news.png'
const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 px-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px", width:"330px"}}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"Electronics and Communication EngineeringElectronics and Communication Engineering"}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
      )
    }
  
  export default NewsItem
  
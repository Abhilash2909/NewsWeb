// import image from '../assets/image.jpg'
// const NewsItem = ({title, description, src, url}) => {
//     return (
//         <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 px-2" style={{maxWidth:"345px"}}>
//         <img src={src?src:image} style={{height:"200px", width:"330px"}}className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title.slice(0,50)}</h5>
//           <p className="card-text">{description?description.slice(0,90):""}</p>
//           <a href={url} className="btn btn-primary">Read More</a>
//         </div>
//       </div>
//       )
//     }
  
//   export default NewsItem

  
// import image from '../assets/image.jpg';

// const NewsItem = ({title, description, src, url}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2" style={{maxWidth: "345px"}}>
//       <img src={src ? src : image} style={{height: "200px", width: "330px"}} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title ? title.slice(0, 50) : "Default Title"}</h5>
//         <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with the latest news updates from around the world. Get insights on the most pressing issues and trending topics."}</p>
//         <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;


// import image from '../assets/image.jpg';

// const NewsItem = ({ title, description, src, url }) => {
//     return (
//         <div className="card news-card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 px-2" style={{ maxWidth: "345px"}}>
//             <img src={src ? src : image} className="card-img-top" alt="..." />
//             <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                     <h5 className="card-title">{title.slice(0, 50)}</h5>
//                     <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with the latest news updates from around the world. Get insights on the most pressing issues and trending topics."}</p>
//                 </div>
//                 <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">Read More</a>
//             </div>
//         </div>
//     );
// }

// export default NewsItem;

import image from '../assets/image.jpg';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card news-card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 px-2" style={{ maxWidth: "345px"}}>
            <img src={src ? src : image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
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

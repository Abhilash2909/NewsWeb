
const Navbar = ({setCategory}) => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

  <div className="container-fluid">

    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">NewsWeb</span></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <div className="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</div> */}
          {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">Technology</span></a> */}
          <a className="nav-link" onClick={()=>setCategory("Technology")}>Technology</a>
        </li>
        <li className="nav-item">
          {/* <div className="nav-link" onClick={()=>setCategory("business")}>Business</div> */}
          {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">Business</span></a> */}
          <a className="nav-link" onClick={()=>setCategory("Business")}>Business</a>
        </li>

        <li className="nav-item">
          {/* <div className="nav-link" onClick={()=>setCategory("health")}>Health</div> */}
          <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
        </li>

        <li className="nav-item">
          {/* <div className="nav-link" onClick={()=>setCategory("science")}>Science</div> */}
          {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">Science</span></a> */}
          <a className="nav-link" onClick={()=>setCategory("Science")}>Science</a>
        </li>

        {/* <li className="nav-item"> */}
          {/* <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div> */}
          {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">Sports</span></a> */}
          <a className="nav-link" onClick={()=>setCategory("Sports")}>Sports</a>
        {/* </li> */}

        {/* <li className="nav-item"> */}
          {/* <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div> */}
          {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-6">Entertainment</span></a> */}
          <a className="nav-link" onClick={()=>setCategory("Entertainment")}>Entertainment</a>
        {/* </li> */}



      </ul>
    </div>
  {/* </div> */}

</nav>
  )
}

export default Navbar

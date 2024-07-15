import { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={darkMode ? 'light' : 'dark'}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-6">NewsWeb</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><div className="dropdown-item" onClick={() => setCategory('trending')}>Trending</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('technology')}>Technology</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('business')}>Business</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('health')}>Health</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('science')}>Science</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('sports')}>Sports</div></li>
                <li><div className="dropdown-item" onClick={() => setCategory('entertainment')}>Entertainment</div></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bookmarks</a>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <button className="btn btn-dark ms-2" type="button" onClick={handleDarkModeToggle}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            <a className="btn btn-secondary ms-2" href="#">Contact</a>
            <a className="btn btn-secondary ms-2" href="#">About</a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import logoUrl from '../images/header_trans4.png';
import { Link } from 'react-router-dom';


const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom align-items-end">
    <a className="navbar-brand" href="https://www.boschbash.com/">
      <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="600" />
    </a>
    <ul className="navbar-nav ml-auto">
    <Link to="/">
      <li className="nav-item active">
        <h5>Home</h5><span class="sr-only">(current)</span>
      </li>
      </Link>
      <Link to="/choose">
      <li className="nav-item">
        <h5>Choose</h5>
      </li> 
      </Link>
      <Link to="/search">
      <li className="nav-item active"><span class="sr-only">(current)</span>
        <h5>Search</h5>
      </li>
      </Link>
      <Link to="/upload">
      <li className="nav-item active">
        <h5>Upload</h5>
      </li>
      </Link>
      <Link to="/gallery">
      <li className="nav-item active">
        <h5>Gallery</h5>
      </li>
      </Link>
      <li className="nav-item">
        <h5>About</h5>
      </li> 
    </ul>
  </nav>


)
export default Header;
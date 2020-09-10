import React from 'react';
import logoUrl from '../images/header_trans4.png';
import { Link } from 'react-router-dom';


const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom align-items-end">
    <a class="navbar-brand" href="https://www.boschbash.com/">
      <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="600" />
    </a>
    <ul class="navbar-nav ml-auto">
    <Link to="/">
      <li class="nav-item active">
        <h4>Home</h4><span class="sr-only">(current)</span>
      </li>
      </Link>
      {/* <li class="nav-item">
        <h5>Choose</h5>
      </li> */}
      <Link to="/search">
      <li class="nav-item">
        <h4>Search</h4>
      </li>
      </Link>
      <Link to="/upload">
      <li class="nav-item">
        <h4>Upload</h4>
      </li>
      </Link>
      {/* <li class="nav-item">
        <h5>Choose</h5>
      </li>
      <li class="nav-item">
        <h5>Gallery</h5>
      </li>
      <li class="nav-item">
        <h5>About</h5>
      </li> */}
    </ul>
  </nav>


)
export default Header;
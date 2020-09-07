import React from 'react';
import logoUrl from '../images/header_trans4.png';


const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom align-items-end">
    <a class="navbar-brand" href="https://www.boschbash.com/">
      <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="600" />
    </a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://www.boschbash.com/"><h5>Home</h5><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.boschbash.com/"><h5>Search</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.boschbash.com/"><h5>Gallery</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.boschbash.com/"><h5>Upload</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.boschbash.com/"><h5>About</h5></a>
      </li>
    </ul>
  </nav>


)
export default Header;
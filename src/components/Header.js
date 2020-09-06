import React from 'react'
import logoUrl from '../images/header_trans.png'


const Header = () => (
  <div className="header">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom align-items-end">
      <a class="navbar-brand" href="https://www.boschbash.com/">
        <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="650" />
      </a>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><h5>Search Museums</h5><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h5>View Gallery</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h5>About H. Bosch</h5></a>
      </li>
    </ul>

    </nav>
  </div>
)
export default Header;
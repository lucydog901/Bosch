import React from 'react'
import logoUrl from '../images/headerdark.png'


const Header = () => (
  <div className="header">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom align-items-end">
      <a class="navbar-brand" href="https://www.boschbash.com/">
        <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="750" />
      </a>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Search Museums<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">View Gallery</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About H. Bosch</a>
      </li>
    </ul>

    </nav>
  </div>
)
export default Header;
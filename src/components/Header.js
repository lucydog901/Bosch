import React from 'react'
import logoUrl from '../images/headerdark.png'


const Header = () => (
  <div className="header">
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
  <a class="navbar-brand" href="https://www.boschbash.com/">
  <img src={logoUrl} alt="Bosch Bash logo" class="img-fluid" width="750"/>
  </a>


</nav>
  </div>
)
export default Header;
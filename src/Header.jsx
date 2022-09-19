import React from 'react'
import ReactLogo from './images/reactlogo.png';

function Header() {
  return(
    <nav className='nav'>
    <img className="image" src= {ReactLogo} alt="React Image" />
    <ul className='nav-items'>
          <li>About</li>
          <li>Pricing</li>
          <li>Contacts</li>
        </ul>
  </nav>
  )
}

export default Header
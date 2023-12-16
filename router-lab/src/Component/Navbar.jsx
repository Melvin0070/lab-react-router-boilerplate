import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/home">
          <h1>Kalvium</h1>
        </Link>
        
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

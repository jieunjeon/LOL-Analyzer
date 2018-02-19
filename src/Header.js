import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Overall</Link></li>
        <li><Link to='/Pre-Report'>Pre-Match Analysis Report</Link></li>
        <li><Link to='/Post-Report'>Post-Match Analysis Report</Link></li>
        <li><Link to='/Pro-Player-Report'>Pro-Players Report</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header

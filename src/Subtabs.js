import React from 'react'
import { Link } from 'react-router-dom'

const Subtabs = () => (
  <nav>
      <ul>
        <li><Link to='/pstat'>Stats</Link></li>
        <li><Link to='/tips'>Tips</Link></li>
        <li><Link to='/cstat'>Comparative Stats</Link></li>
      </ul>
  </nav>
)

export default Subtabs

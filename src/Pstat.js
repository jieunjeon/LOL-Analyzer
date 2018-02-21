import React from 'react'
import {Link} from 'react-router-dom'
import Pdata from '../python/data/test_180220.json'

const Stat = () => (
  <div>
    <h1>Player stat will be displayed here</h1>
    <h2>Detailed Playstyle Report of {Pdata.name}</h2>
    <h3>Player Level : {Pdata.summonerLevel}</h3>
    <Link to='/'>
      <button type="button">Back</button>
    </Link>
  </div>
)
export default Stat

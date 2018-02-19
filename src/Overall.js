import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Subtabs from './Subtabs'
import Stat from './Pstat'

const Overall = () => (
  <div>
    <h1>Overall details of player profile</h1>
    <Switch>
      <Route exact path='/' component={Subtabs}/>
    </Switch>
  </div>
)

export default Overall

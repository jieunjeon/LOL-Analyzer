import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Overall from './Overall'
import Pre from './Pre-Report'
import Post from './Post-Report'
import Pro from './Pro-Player-Report'
import Stat from './Pstat'
import CStat from './Cstat'
import Tips from './Tips'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Overall}/>
      <Route path='/pre-report' component={Pre}/>
      <Route path='/post-report' component={Post}/>
      <Route path='/pro-player-report' component={Pro}/>
      <Route path='/pstat' component={Stat}/>
      <Route path='/cstat' component={CStat}/>
      <Route path='/tips' component={Tips}/>
    </Switch>
  </main>
)

export default Main

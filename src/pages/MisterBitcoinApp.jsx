import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import React, { Component } from "react"
import { Home } from "./Home"
import { Signup } from "./Signup"
import { Contact } from "./Contact"
import { Statistic } from "./Statistic"
import { ContactDeatails } from "../pages/Contact-details"
import { ContactEdit } from "./Contact-Edit"

export class MisterBitcoinApp extends Component {
  render() {
    return (
      <Router>
        <div className='main-conteiner'>
          <Switch>
            <Route path='/contact/edit/:id?' component={ContactEdit} />
            <Route path='/contact/:id' component={ContactDeatails} />
            <Route path='/contact' component={Contact} />
            <Route path='/statistic' component={Statistic} />
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

import { HashRouter as Router, Redirect, Route, Switch, NavLink, withRouter } from "react-router-dom"
// import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Component } from "react"

export class MainHeader extends Component {
  render() {
    return (
      <Router>
        <div className='app-header  flex space-between'>
          {/* <section className='container'> */}
          <h1 className="logo-name">MisterBitcoin</h1>

          <nav>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink to='/contact'>contact</NavLink>
            <NavLink to='/statistic'>Statics</NavLink>
          </nav>
          {/* </section> */}
        </div>
      </Router>
    )
  }
}

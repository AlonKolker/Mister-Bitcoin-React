import { HashRouter as Router, NavLink } from "react-router-dom"

import { Component } from "react"

export class MainHeader extends Component {
  render() {
    return (
      <Router>
        <div className='app-header  flex space-between'>
          <h1 className='logo-name'>MisterBitcoin</h1>

          <nav>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/statistic'>Statics</NavLink>
          </nav>
        </div>
      </Router>
    )
  }
}

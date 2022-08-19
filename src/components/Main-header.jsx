import { HashRouter as Router, NavLink } from "react-router-dom"
import btc4 from "../assets/imgs/btc4.png"

import { Component } from "react"

export class MainHeader extends Component {
  render() {
    return (
      <Router>
        <div className='app-header  flex space-between'>
          <div className="logo-conteiner ">
          <h1 className='logo-name'>MisterBitcoin</h1>
          <img className="signup-btc-icon" src={btc4} alt="" />
          </div>
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

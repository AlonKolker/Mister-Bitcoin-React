import { Component } from "react"
import { userService } from "../services/user.service"
import btc4 from "../assets/imgs/btc4.png"

export class Signup extends Component {
  state = {
    name: "",
  }

  onSaveUser = (ev) => {
    ev.preventDefault()
    const { value } = ev.target.elements.name
    userService.signUp(value)
    this.props.history.push("/")
    return
  }

  render() {
    const { name } = this.state
    return (
      <div className="signup-conteiner">
        <h1 className="signup-heder">Sign up</h1>
        <img className="signup-btc-icon" src={btc4} alt="" />
        <form className="signup-form" onSubmit={this.onSaveUser} >
          <label htmlFor='name'></label>
          <input className="signup-form-input" type='text' name='name' id='name' placeholder="Enter your name" />
          <button>Save</button>
        </form>        
      </div>
    )
  }
}

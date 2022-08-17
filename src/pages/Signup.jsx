import React, { Component } from "react"
import { userService } from "../services/user.service"

export class Signup extends Component {
  state = {
    name: "",
  }

  // handleChange = ({ target }) => {
  //     // const field = target.name
  //     // const value = target.type === "number" ? +target.value || "" : target.value
  //     this.setState({name:target.value})
  //   }

  //   onSaveUser =  (ev) => {
  //     console.log('sfsdf');
  //     ev.preventDefault()
  //    let ans =  userService.signUp(this.state.name)
  //    if(ans == true) this.props.history.push("/")
  //    return
  //   }

  //   inputRefFunc = (elInput) => {
  //     elInput && elInput.focus()
  // }

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
      <div>
        <pre>{name}</pre>
        <h1>Sign up</h1>
        <form onSubmit={this.onSaveUser} className=''>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

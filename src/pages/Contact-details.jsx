import React, { Component } from "react"
import { contactService } from "../services/contactService"
import { userService } from "../services/user.service"
import { TransferFund } from "../components/Transfer-fund"
import { MovesList } from "../components/Moves-list"

import { HashRouter as Link, NavLink, Router, Redirect, Route, Switch } from "react-router-dom"

export class ContactDeatails extends Component {
  state = {
    contact: null,
    userMoves: null,
  }

  componentDidMount() {
    this.getCurrContact()
    this.getCurrUser()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCurrContact()
    }
  }

  async getCurrContact() {
    let contactId = this.props.match.params.id
    let contact = await contactService.getContactById(contactId)
    this.setState({ contact })
  }
  getCurrUser() {
    let userMoves = userService.getUser().moves
    this.setState({ userMoves })
  }
  async onRemoveContact(contactId) {
    await contactService.deleteContact(contactId)
    this.props.history.push("/contact")
  }
  onBack = () => {
    this.props.history.push("/contact")
  }
  onTransfer = (val, name) => {
    console.log("onTransfer", name)
    let ans = userService.updateBalance(val, name)
    if (ans === false) alert("More then your coins balance")
  }

  render() {
    const { contact, userMoves } = this.state
    if (!contact) return <div>Loading Deatails...</div>
    // const contactImg =  `https://robohash.org/${contact._id}`
    const contactImg = `https://i.pravatar.cc/150?u=${contact._id}`
    return (
      <div className='deatils-conteiner'>
        <div className='deatils-content'>
          <div className='flex space-between'>
            <div className='remove-contact-logo' onClick={() => this.onRemoveContact(contact._id)}>
              🗑 Remove
            </div>
            <NavLink className='edit-contact-logo' to={`/contact/edit/${contact._id}`}>
              Edit 🖊
            </NavLink>
          </div>
          <div className='main-content'>
            <img className='contact-img' src={contactImg} alt='' />
            <div>name: {contact.name}</div>
            <div>Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
          </div>
          <TransferFund contact={contact} onTransfer={this.onTransfer} />
          <button className="nice-button details-go-back-btn" onClick={this.onBack}>Go back</button>
        </div>
        <MovesList  contact={contact} moves={userMoves} title={"Your Moves:"} />
      </div>
    )
  }
}

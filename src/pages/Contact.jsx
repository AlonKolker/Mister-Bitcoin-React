import React, { Component } from "react"
import { HashRouter as Router, Link, Redirect, Route, Switch, NavLink, withRouter } from "react-router-dom"
import { contactService } from "../services/contactService"
import { ContactList } from "../components/Contact-list"
import { ContactDeatails } from "../pages/Contact-details"
import { ContactFilter } from "../components/Contact-filter"

export class Contact extends Component {
  state = {
    contacts: null,
    // btc: null,
    contactId: null,
    // currContact: null,
    filterBy: null,
  }
  componentDidMount() {
    this.loaContacts()
  }
  async loaContacts() {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      this.setState({ contacts })
    } catch (err) {
      console.log("err:", err)
    }
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loaContacts)
  }

  render() {
    const { contacts, contactId, currContact } = this.state
    if (!contacts) return <span>Loading</span>
    if (contactId) return <ContactDeatails contactId={contactId} onShowDeatails={this.onShowDeatails} />
    return (
      <div className="contacts-conteiner">
        {/* <br /> */}
        {/* <h1>Contacts List</h1> */}
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link className="add-new-contact-btn" to='/contact/edit'>New Contact</Link>

        <ContactList contacts={contacts} onShowDeatails={this.onShowDeatails} />
        {/* <Router> */}
        {/* </Router> */}
      </div>
    )
  }
}

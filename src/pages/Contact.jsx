import React, { Component } from "react"
import { HashRouter as Router, Link } from "react-router-dom"
import { contactService } from "../services/contactService"
import { ContactList } from "../components/Contact-list"
import { ContactDeatails } from "../pages/Contact-details"
import { ContactFilter } from "../components/Contact-filter"

export class Contact extends Component {
  state = {
    contacts: null,
    contactId: null,
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
      <div className='contacts-conteiner'>
        <div className="contact-options-box  flex">
          <Link className='add-new-contact-btn' to='/contact/edit'>
            New Contact
          </Link>
          <ContactFilter onChangeFilter={this.onChangeFilter} />
        </div>
        <ContactList contacts={contacts} onShowDeatails={this.onShowDeatails} />
      </div>
    )
  }
}

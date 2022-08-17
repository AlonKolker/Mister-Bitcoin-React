import { Component } from "react"
import { ContactPreview } from "../components/Contact-preview"
// import { ContactList } from "../components/Contact-list"

export function ContactList({ contacts, onShowDeatails }) {

  return (
    <>
      <div className='contact-list simple-cards-grid'>
        {contacts.map((contact) => (
          <ContactPreview key={contact._id} contact={contact} onShowDeatails={onShowDeatails} />
        ))}
      </div>
    </>
  )
}

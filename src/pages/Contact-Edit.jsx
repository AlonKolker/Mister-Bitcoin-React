import { Component, createRef } from "react"
import { contactService } from "../services/contactService"

export class ContactEdit extends Component {
  state = {
    contact: null,
  }


  async componentDidMount() {
    console.log("edit componentDidMount")
    const contactId = this.props.match.params.id
    const contact = contactId ? await contactService.getContactById(contactId) :  contactService.getEmptyContact()
    this.setState({ contact })
 
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value || "" : target.value
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    console.log(this.state.contact);
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    // console.log(...this.state.contact );
    await contactService.saveContact({ ...this.state.contact })
    this.props.history.push("/contact")
  }

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { contact } = this.state
    console.log(contact)
    if (!contact) return <div>Loading contact edit...</div>
    return (
      <section className='contact-edit-conteiner'>
        <div className='contact-edit'>
        <h1>{contact._id ? "Edit" : "Add"} contact</h1>
        <form onSubmit={this.onSaveContact} className="edit-contact-form">
          <label htmlFor='name'>Name</label>
          <input  className="edit-input" ref={this.inputRefFunc} value={contact.name} onChange={this.handleChange} type='text' name='name' id='name' />
          <label htmlFor='phone'>Phone</label>
          <input className="edit-input"  ref={this.inputRefFunc} value={contact.phone} onChange={this.handleChange} type='text' name='phone' id='phone' />
          <label htmlFor='email'>Email</label>
          <input  className="edit-input" ref={this.inputRefFunc} value={contact.email} onChange={this.handleChange} type='text' name='email' id='email' />
        <div className="flex">
          <button className="nice-button">Save</button>
        <button className="nice-button" onClick={this.props.history.goBack}>Back</button>
        </div>
        </form>
        </div>
      </section>
    )
  }
}

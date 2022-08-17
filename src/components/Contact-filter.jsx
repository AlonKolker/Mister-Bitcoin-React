import { Component } from "react"

export class ContactFilter extends Component {
  state = {
    name: "",
    phone: "",
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value || "" : target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state })
    })
  }

  render() {
    const { name, phone } = this.state
    return (
      <form className='contact-filter'>
        <span>Filter</span>
        <div  className="filter-inputs">
        <section>
          <label htmlFor='name'></label>
          <input value={name} onChange={this.handleChange} type='text' name='name' id='name' placeholder='Filter by name..' />
        </section>
        <section>
          <label htmlFor='phone'></label>
          <input value={phone} onChange={this.handleChange} type='text' name='phone' id='phone' placeholder='Filter by phone..' />
        </section>
        </div>
      </form>
    )
  }
}

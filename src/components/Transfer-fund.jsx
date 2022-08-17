import React from "react"

export function TransferFund({ contact, onTransfer }) {
  return (
    <section>
      {/* <div>{contactMoves? contactMoves: 'Th'}</div> */}
      <div>Transfer coins to {contact.name}</div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          onTransfer(ev.target.elements.amount.value,contact.name)
        }}
      >
        <label htmlFor='amount'></label>
        <input type='text' id='amount' name='amount' />
        <button>Transfer</button>
      </form>
    </section>
  )
}

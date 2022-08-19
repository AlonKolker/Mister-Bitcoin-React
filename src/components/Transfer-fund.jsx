import React from "react"

export function TransferFund({ contact, onTransfer }) {
  return (
    <section className="transfer-fund">
      {/* <div>{contactMoves? contactMoves: 'Th'}</div> */}
      <h3>Transfer coins to {contact.name}</h3>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          onTransfer(ev.target.elements.amount.value,contact.name)
        }}
      >
        <label htmlFor='amount'></label>
        <input type='text' id='amount' name='amount' placeholder="Enter coins amount" />
        <button className="transfer-btn">Transfer</button>
      </form>
    </section>
  )
}

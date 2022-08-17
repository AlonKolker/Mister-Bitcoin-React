import React from "react"

export function MovesList({ contact, moves, title }) {
  if(!moves || !moves.length) return
  let newMoves
  if (contact !== null) newMoves = moves.filter((move) => move.to === contact.name)//For contact details page
  if (contact === null) newMoves = moves.filter((move) => move.to === move.to)//For home page
  if(!newMoves.length) return

  return (
    <section className="move-list">
      <h1>{title}</h1>
      {newMoves.map((move, idx) => {
        return (
          <div className="move" key={idx}>
            <span>At:{move.At}</span>
            <br />
            <span>Amount: {move.Amount} coins</span>
          </div>
        )
      })}
    </section>
  )
}

{
  /* <section>
{moves.map(move=>{
  console.log(contact.name,move.to);
  if(move.to === contact.name){
    <h1>{move.to}</h1>
  }})}
</section> */
}

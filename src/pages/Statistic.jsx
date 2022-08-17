import React, { Component } from "react"
import { MarketPrice } from "../components/Market-price"
import { ConfirmedTransactions } from "../components/Confirmed-transactions"


export class Statistic extends Component {


  render() {
    return (
      <div>
        <MarketPrice />
        <ConfirmedTransactions/>
      </div>
    )
  }
}

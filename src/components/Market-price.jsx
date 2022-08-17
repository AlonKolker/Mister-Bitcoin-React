import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import { bitcoinService } from "../services/bitcoin.service"

export class MarketPrice extends Component {
  state = {
    updatedMarketPrice: null,
  }

  componentDidMount() {
    this.loadBtcPrices()
  }
  async loadBtcPrices() {
    try {
      let updatedMarketPrice = await bitcoinService.getMarketPrice()
      let xVals
      xVals = updatedMarketPrice.values.map((val) => new Date(val.x * 1000).toLocaleDateString())
      //   console.log(updatedMarketPrice.values.filter(val=>val.y));
      let newData = {
        labels: xVals,
        datasets: [
          {
            label: "BTC Market Price - 10 Months",
            data: updatedMarketPrice.values.filter((val) => val.y),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
          },
        ],
      }
      // console.log(newData);
      this.setState({ updatedMarketPrice: newData })
    } catch (err) {
      console.log("err:", err)
    }
  }

  render() {
    const { updatedMarketPrice } = this.state
    if (!updatedMarketPrice) return <span>Loading</span>
    return (
      <div>
        <Line data={updatedMarketPrice} />
      </div>
    )
  }
}

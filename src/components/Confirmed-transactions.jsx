import React, { Component } from "react"
import { Line } from "react-chartjs-2";
import { bitcoinService} from "../services/bitcoin.service";
import Chart from 'chart.js/auto';



export class ConfirmedTransactions extends Component {
  state = {
    dailyTransitons: null,
  }

  componentDidMount() {
    this.loaddDailyTransitons()
  }
  async loaddDailyTransitons() {
    try {
      let updatedDailyTransitons = await bitcoinService.getConfirmedTransactions()
      let xVals 
      xVals = updatedDailyTransitons.values.map(val=>  new Date(val.x*1000).toLocaleDateString())
    //   console.log(updatedMarketPrice.values.filter(val=>val.y));
      let newData = {
        labels: xVals,
        datasets: [
            {
              label: "BTC Transitions Volume - 10 Months",
              data:updatedDailyTransitons.values.filter(val=>val.y),
              fill: true,
              backgroundColor: "#72585f8f",
              borderColor: "#a0465c"
            },
        ]
    }
    // console.log(newData);
      this.setState({ dailyTransitons:newData })
    } catch (err) {
      console.log("err:", err)
    }
  }

  render() {
      const {dailyTransitons} = this.state
      if(!dailyTransitons) return <span>Loading</span>
    return (
      <div>
      <Line data={dailyTransitons} />
      </div>
    )
  }
}

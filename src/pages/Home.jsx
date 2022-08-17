// import React, { Component } from "react"

// export function Home({btc,user}) {
import React, { Component } from "react"
import { userService } from "../services/user.service"
import { bitcoinService } from "../services/bitcoin.service"
import { MovesList } from "../components/Moves-list"
import btc1 from "../assets/imgs/btc1.png"
export class Home extends Component {
  state = {
    user: null,
    btc: null,
    userMoves:null,
  }
  componentDidMount() {
    this.loadUser()
  }
  async loadUser() {
    try {
      const user = await userService.getUser()
      if (!user) return this.props.history.push("/signup")
      let threeMoves = JSON.parse(JSON.stringify(user.moves)).splice(-3)
      this.setState({ user, userMoves: threeMoves })
      this.btcFormat(user.coins)
    } catch (err) {
      console.log("err:", err)
    }
  }
  async btcFormat(coins) {
    let btc = await bitcoinService.getRate(coins)
    this.setState({ btc })
  }
  render() {
    const { user, btc,userMoves } = this.state
    if (!user) return <div>Loading</div>
    return (
      <section className='home-page-conteiner'>
        
        <div>🎈
        {/* <img className="home-bitcoin-logo" src={btc1} alt="../img" /> */}
        </div>
        <div>Hello Dear user: {user.name}!</div>
        <div>💰Coins:{user.coins}</div>
        <div>BTC:{btc}</div>
        <MovesList contact={null} moves={userMoves} title={`Your last ${userMoves.length} moves`} />
      </section>
    )
  }
}

import { Component } from "react"
import { userService } from "../services/user.service"
import { bitcoinService } from "../services/bitcoin.service"
import { MovesList } from "../components/Moves-list"
import avatar from "../assets/imgs/bitcoin-man.ipg"
// import avatar from "../assets/imgs/avatar4.jpg"

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
        
        <div>
        <img className="home-bitcoin-logo" src={avatar} alt="" />
        </div>
        <div className="home-header">Hello Dear {user.name}!</div>
        <div className="home-user-balance">
        <div>Your Coins: {user.coins} 💰</div>
        <div>Your coins in BTC: {btc}</div>
        </div>
        <MovesList contact={null} moves={userMoves} title={userMoves.length? `Your last ${userMoves.length} moves:`:'Your didnt make a move yet'} />
      </section>
    )
  }
}

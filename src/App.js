import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { MisterBitcoinApp } from "./pages/MisterBitcoinApp"
import { MainHeader } from "./components/Main-header"
import "./assets/scss/global.scss"
function App() {
  return (
    <main>
        <MainHeader />
        <MisterBitcoinApp />
      </main>
  )
}
export default App

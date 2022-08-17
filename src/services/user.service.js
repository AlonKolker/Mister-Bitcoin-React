import { storageService } from "../services/storageService"
export const userService = {
  getUser,
  signUp,
  updateBalance,
}

const USERS = "usersDB"
const USER_KEY = "loggedin"
// const gUsers = storageService.load(USERS) || {}

function getUser() {
  // return {
  //     name:"Banjemin Brice",
  //     coins: 100,
  //     moves:[],
  // }
  //   const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
  const user = storageService.load(USER_KEY) || null
  return user
}

function signUp(name) {
  let user = {
    name,
    coins: 100,
    moves: [],
  }
  console.log(name)
  storageService.store(USER_KEY, user)
}

function updateBalance(val,to) {
  let user = getUser()
  let userBalance = JSON.parse(JSON.stringify(user.coins))
  if (userBalance - val <= 0) return false

  user.coins = user.coins - val
  let move = {
    'At': new Date(Date.now()).toLocaleDateString(),
    'Amount': val ,
   to,
  }
  user.moves.unshift(move)
  storageService.store(USER_KEY, user)
  return true
}

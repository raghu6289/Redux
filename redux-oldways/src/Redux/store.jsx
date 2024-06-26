import { createStore, combineReducers } from "redux"
import { adminReducer, userReducer } from "./userReducer"


const reducer = combineReducers({
  userInfo: userReducer,
  adminInfo: adminReducer
})

const store = createStore(reducer)

export default store


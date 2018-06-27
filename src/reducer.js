import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import marketReducer from "./layouts/market/market-reducer";

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
    market: marketReducer
})

export default reducer

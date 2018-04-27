import { combineReducers } from 'redux'
import loading from './loading'
import players from './players'
import questions from './questions'
import categories from './categories'
import gameState from './gameState.js'

export default combineReducers({
  loading,
  players,
  questions,
  categories,
  gameState
})

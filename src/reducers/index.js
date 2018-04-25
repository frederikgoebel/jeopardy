import { combineReducers } from 'redux'
import questions from './questions'
import players from './players'
import categories from './categories'
import overlays from './overlays'

export default combineReducers({
  questions,
  players,
  categories,
  overlays
})

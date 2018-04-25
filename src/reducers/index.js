import { combineReducers } from 'redux'
import loading from './loading'
import players from './players'
import overlays from './overlays'
import questions from './questions'
import categories from './categories'

export default combineReducers({
  loading,
  players,
  questions,
  categories,
  overlays,
})

import { combineReducers } from 'redux'
import { ADD_SCORE } from '../actions'
import { ADD_PLAYER, REMOVE_PLAYER } from '../actions/players'

var lastId = 0;
const players = (state = [], action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          score: state[action.player].score + action.points
        }
      };
    case ADD_PLAYER:
      lastId++;
      return {
        ...state,
        ["player" + lastId]: {
          name: action.name,
          score: 0
        }
      }
    case REMOVE_PLAYER:
      let newState = {
        ...state
      }
      delete newState[action.id]
      return newState
    default:
      return state;
  }


}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        "player" + lastId
      ]
    case REMOVE_PLAYER:
      return state.filter((id) => id !== action.id)
    default:
      return state
  }
}

export default combineReducers({
  byId: players,
  allIds: allIds
});

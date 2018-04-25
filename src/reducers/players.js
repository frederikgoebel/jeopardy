import { combineReducers } from 'redux'
import { ADD_SCORE } from '../actions'


const players = (state = [], action) => {
  switch (action.type) {
    case ADD_SCORE:
      console.log(action.points)
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          score: state[action.player].score + action.points
        }
      };
    default:
      return state;
  }


}

const allIds = (state = [], action) => {
  return state;
}

export default combineReducers({
  byId: players,
  allIds: allIds
});

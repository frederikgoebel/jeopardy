import { combineReducers } from 'redux'
import { CARD_ACTIVATED, CARD_SOLVED } from '../actions'
import { FETCH_BOARD_SUCCESS } from '../actions/fetch'


const byId = (state = [], action) => {
  switch (action.type) {
    case CARD_SOLVED:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isAnswered: true
        }
      };
    case FETCH_BOARD_SUCCESS:
      return action.questions.byId
    default:
      return state;
  }
}

const active = (state = null, action) => {
  switch (action.type) {
    case CARD_ACTIVATED:
      return action.id
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARD_SUCCESS:
      return action.questions.allIds
    default:
      return state;
  }
}

export default combineReducers({
  active: active,
  byId: byId,
  allIds: allIds
});

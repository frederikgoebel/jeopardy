import { combineReducers } from 'redux'
import { CARD_ACTIVATED } from '../actions'
import { FETCH_BOARD_SUCCESS } from '../actions/fetch'


const questions = (state = [], action) => {
  switch (action.type) {
    case CARD_ACTIVATED:
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
  byId: questions,
  allIds: allIds
});

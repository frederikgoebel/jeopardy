import { combineReducers } from 'redux'
import { CARD_ACTIVATED } from '../actions'


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
    default:
      return state;
  }
}

const active = (state = [], action) => {
  switch (action.type) {
    case CARD_ACTIVATED:
      return action.id
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  return state;
}

export default combineReducers({
  active: active,
  byId: questions,
  allIds: allIds
});

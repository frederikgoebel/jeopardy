import { combineReducers } from 'redux'
import { FETCH_BOARD_SUCCESS } from '../actions/fetch'

const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARD_SUCCESS:
      return action.categories.byId
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARD_SUCCESS:
      return action.categories.allIds
    default:
      return state;
  }

}

export default combineReducers({
  byId: categories,
  allIds: allIds
});

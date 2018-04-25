import { combineReducers } from 'redux'


const categories = (state = [], action) => {
  return state;
}

const allIds = (state = ["A"], action) => {
  return state;
}

export default combineReducers({
  byId: categories,
  allIds: allIds
});

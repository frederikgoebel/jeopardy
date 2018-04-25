import { FETCH_BOARD_BEGIN, FETCH_BOARD_SUCCESS, FETCH_BOARD_FAILURE } from '../actions/fetch';

const loading = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARD_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_BOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      }
    case FETCH_BOARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default loading

import { SHOW_QUESTION, HIDE_QUESTION, SHOW_ASSIGN_POINTS, HIDE_ASSIGN_POINTS } from '../actions'


const overlays = (state = [], action) => {
  switch (action.type) {
    case SHOW_QUESTION:
      return {
        ...state,
        question: {
          isActive: true,
          questionId: action.questionId
        }
      };
    case HIDE_QUESTION:
      return {
        ...state,
        question: {
          isActive: false
        }
      };
    case SHOW_ASSIGN_POINTS:
      return {
        ...state,
        points: {
          isActive: true
        }
      };
    case HIDE_ASSIGN_POINTS:
      return {
        ...state,
        points: {
          isActive: false
        }
      };
    default:
      return state;
  }
}

export default overlays;

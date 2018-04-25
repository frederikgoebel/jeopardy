export const FETCH_BOARD_BEGIN = 'FETCH_BOARD_BEGIN';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const FETCH_BOARD_FAILURE = 'FETCH_BOARD_FAILURE';

export const fetchBoardBegin = () => ({
  type: FETCH_BOARD_BEGIN
});

export const fetchBoardSuccess = (questions, categories) => ({
  type: FETCH_BOARD_SUCCESS,
  questions: questions,
  categories: categories
});

export const fetchBoardFailure = (error) => ({
  type: FETCH_BOARD_FAILURE,
  error: error
});

export function fetchBoard(dispatch) {
  dispatch(fetchBoardBegin());
  return fetch("/games/java/content.json")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      const board = normalize(json);
      dispatch(fetchBoardSuccess(board.questions, board.categories));
      return;
    })
    .catch(error => dispatch(fetchBoardFailure(error)));
}

function normalize(json) {
  var questionsById = {}
  var questionsAllIds = []
  var categoriesById = {}
  var categoriesAllIds = []

  categoriesAllIds = json.categories.map((catergory, i) => {
    const categoryQuestions = catergory.questions.map((question, j) => {
      const questionId = "category" + i + "/question" + j
      questionsById = {
        ...questionsById,
        [questionId]: {
          value: (j + 1) * 200,
          isAnswered: false,
          text: question
        }
      }
      return questionId
    })

    categoriesById = {
      ...categoriesById,
      ["category" + i]: {
        name: catergory.name,
        questions: categoryQuestions
      }
    }

    questionsAllIds.concat(categoryQuestions)
    return "category" + i
  })

  return {
    questions: {
      byId: questionsById,
      allIds: questionsAllIds
    },
    categories: {
      byId: categoriesById,
      allIds: categoriesAllIds
    }
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const CARD_ACTIVATED = "CARD_ACTIVATED"
const ADD_SCORE = "ADD_SCORE"
const SHOW_QUESTION = "SHOW_QUESTION"
const HIDE_QUESTION = "HIDE_QUESTION"
const SHOW_ASSIGN_POINTS = "SHOW_ASSIGN_POINTS"
const HIDE_ASSIGN_POINTS = "HIDE_ASSIGN_POINTS"

const cardActivated = (id) => ({
  type: CARD_ACTIVATED,
  id: id,
})

const showQuestion = (questionId) => ({
  type: SHOW_QUESTION,
  questionId: questionId,
})

const hideQuestion = () => ({
  type: HIDE_QUESTION
})

const showAssignPoints = () => ({
  type: SHOW_ASSIGN_POINTS,
})

const hideAssignPoints = () => ({
  type: HIDE_ASSIGN_POINTS
})

const addScore = (player, points) => ({
  type: ADD_SCORE,
  player: player,
  points: points
})

export { CARD_ACTIVATED, cardActivated, ADD_SCORE, addScore, SHOW_QUESTION, HIDE_QUESTION, showQuestion, hideQuestion, hideAssignPoints, showAssignPoints, HIDE_ASSIGN_POINTS, SHOW_ASSIGN_POINTS }

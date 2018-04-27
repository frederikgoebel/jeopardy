export const CARD_ACTIVATED = "CARD_ACTIVATED"
export const cardActivated = (id) => ({
  type: CARD_ACTIVATED,
  id: id,
})

export const CARD_SOLVED = "CARD_SOLVED"
export const cardSolved = (id) => ({
  type: CARD_SOLVED,
  id: id
})

export const ADD_SCORE = "ADD_SCORE"
export const addScore = (player, points) => ({
  type: ADD_SCORE,
  player: player,
  points: points
})

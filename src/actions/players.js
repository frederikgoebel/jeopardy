export const ADD_PLAYER = "ADD_PLAYER"
export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name: name
})

export const REMOVE_PLAYER = "REMOVE_PLAYER"
export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  id: id
})

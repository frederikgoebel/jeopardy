import { SWITCH_GAME_STATE, GAME_STATE_PLAYER_SELECTION } from '../actions/gameState'

const gameState = (state = GAME_STATE_PLAYER_SELECTION, action) => {
  switch (action.type) {
    case SWITCH_GAME_STATE:
      return action.state
    default:
      return state
  }
}

export default gameState

import React from 'react'
import { connect } from "react-redux";
import Board from './Board';
import GameInfo from './GameInfo'
import QuestionOverlay from './QuestionOverlay'
import PointsOverlay from './PointsOverlay'
import GameOverOverlay from './GameOverOverlay'
import Loader from './Loader'
import { GAME_STATE_LOADING, GAME_STATE_PLAYER_SELECTION, GAME_STATE_BOARD, GAME_STATE_QUESTION, GAME_STATE_ASSIGN_POINTS, GAME_STATE_GAME_OVER } from '../actions/gameState'
import NewGame from './NewGame'

const Game = ({gameState}) => {
  var inner = null;
  switch (gameState) {
    case GAME_STATE_LOADING:
      inner = <Loader />
      break;
    case GAME_STATE_PLAYER_SELECTION:
      inner = <NewGame />
      break;
    case GAME_STATE_BOARD:
      inner = [<Board key={"board"}/>, <GameInfo key={"gameInfo"}/>]
      break;
    case GAME_STATE_QUESTION:
      inner = <QuestionOverlay />
      break;
    case GAME_STATE_ASSIGN_POINTS:
      inner = <PointsOverlay />
      break;
    case GAME_STATE_GAME_OVER:
      inner = <GameOverOverlay />
      break;
    default:
      inner = <b>ERROR: Invalid state.</b>
      break;
  }
  return (
    <div className="game">
      {inner}
    </div>
  )
}

const mapStateToProps = state => ({
  gameState: isGameOver(state.questions) ? GAME_STATE_GAME_OVER : state.gameState,
})

const isGameOver = (questions) => {
  return questions.allIds.reduce((prev, id) => {
    return (prev && questions.byId[id].isAnswered)
  }, true)
}

export default connect(
  mapStateToProps,
)(Game)

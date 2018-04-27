import React from "react";
import { connect } from "react-redux";
import { addScore, cardSolved } from "../actions";
import { switchGameState, GAME_STATE_ASSIGN_POINTS, GAME_STATE_BOARD } from '../actions/gameState'


const PointsOverlay = ({players, isActive, points, onNameClick, activeQuestion}) => {
  if (isActive) {
    return (
      <div className="overlay">
      <h2>Who got it right?</h2>
        {players.allIds.map((id) => <a onClick={(e) => onNameClick(id, points, activeQuestion)} key={id}>{players.byId[id].name}</a>)}
      </div>
    )
  } else {
    return null
  }
}


const mapStateToProps = state => {
  return {
    players: state.players,
    isActive: state.gameState === GAME_STATE_ASSIGN_POINTS,
    points: (state.gameState === GAME_STATE_ASSIGN_POINTS ? state.questions.byId[state.questions.active].value : 0),
    activeQuestion: state.questions.active
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onNameClick: (player, points, questionId) => {
      dispatch(switchGameState(GAME_STATE_BOARD))
      dispatch(addScore(player, points))
      dispatch(cardSolved(questionId))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsOverlay)

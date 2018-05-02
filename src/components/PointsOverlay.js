import React from "react";
import { connect } from "react-redux";
import { addScore, cardSolved } from "../actions";
import { switchGameState, GAME_STATE_ASSIGN_POINTS, GAME_STATE_BOARD } from '../actions/gameState'
import Overlay from './Overlay'


const PointsOverlay = ({players, points, activeQuestion, onNameClick, onDismissClick}) => {
  return (
    <Overlay className="flex flex-center flex-column">
      <h2>Who got it right?</h2>
      {players.allIds.map((id) => <a onClick={(e) => onNameClick(id, points, activeQuestion)} key={id}>{players.byId[id].name}</a>)}
      <hr />
      <a onClick={(e) => onDismissClick(activeQuestion)} key={"dismiss"}>Nobody</a>
    </Overlay>
  )
}

const mapStateToProps = state => {
  return {
    players: state.players,
    points: state.questions.byId[state.questions.active].value,
    activeQuestion: state.questions.active
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onNameClick: (player, points, questionId) => {
      dispatch(switchGameState(GAME_STATE_BOARD))
      dispatch(addScore(player, points))
      dispatch(cardSolved(questionId))
    },
    onDismissClick: (questionId) => {
      dispatch(switchGameState(GAME_STATE_BOARD))
      dispatch(cardSolved(questionId))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsOverlay)

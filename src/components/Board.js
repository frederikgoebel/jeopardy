import React from "react";
import { connect } from "react-redux";
import { cardActivated } from "../actions/index";
import Column from './Column'
import { fetchBoard } from '../actions/fetch'
import { switchGameState, GAME_STATE_QUESTION } from '../actions/gameState'

const Board = ({categories, questions, onCardClick, isGameOver}) => {

  if (isGameOver) {
    return (<div>Game Over!</div>);
  }
  return (
    <div id="board">
        {categories.allIds.map((id) => <Column key={id} name={categories.byId[id].name} questions={questions} questionIds={categories.byId[id].questions} onCardClick={onCardClick} />)}
      </div>
    );
}

const mapStateToProps = state => {
  return ({
    categories: state.categories,
    questions: state.questions
  })
}

const mapDispatchToProps = dispatch => ({
  onCardClick: (id) => function() {
    dispatch(cardActivated(id))
    dispatch(switchGameState(GAME_STATE_QUESTION))
  }(),
  onLoad: () => {
    fetchBoard(dispatch)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

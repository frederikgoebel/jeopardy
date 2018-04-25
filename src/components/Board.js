import React from "react";
import { connect } from "react-redux";
import { cardActivated, showQuestion } from "../actions/index";
import Column from './Column'

const Board = ({categories, questions, onCardClick}) => (
  <div id="board">
    {categories.allIds.map((id) => <Column key={id} name={categories.byId[id].name} questions={questions} questionIds={categories.byId[id].questions} onCardClick={onCardClick} />)}
  </div>
)

const mapStateToProps = state => ({
  categories: state.categories,
  questions: state.questions
})

const mapDispatchToProps = dispatch => ({
  onCardClick: (id) => function() {
    dispatch(cardActivated(id))
    dispatch(showQuestion(id))
  }()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

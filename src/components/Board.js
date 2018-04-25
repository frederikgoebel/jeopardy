import React from "react";
import { connect } from "react-redux";
import { cardActivated, showQuestion } from "../actions/index";
import Column from './Column'
import { fetchBoard } from '../actions/fetch'

class Board extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    const {error, loading, categories, questions, onCardClick} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (<div>Loading...</div>);
    }

    return (
      <div id="board">
        {categories.allIds.map((id) => <Column key={id} name={categories.byId[id].name} questions={questions} questionIds={categories.byId[id].questions} onCardClick={onCardClick} />)}
      </div>
      );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  questions: state.questions,
  loading: state.loading.isLoading,
  error: state.loading.error

})

const mapDispatchToProps = dispatch => ({
  onCardClick: (id) => function() {
    dispatch(cardActivated(id))
    dispatch(showQuestion(id))
  }(),
  onLoad: () => {
    fetchBoard(dispatch)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

import React from 'react'
import { connect } from "react-redux";
import Overlay from './Overlay'
import { switchGameState, GAME_STATE_QUESTION, GAME_STATE_ASSIGN_POINTS } from '../actions/gameState'

const QuestionOverlay = ({content, onClick}) => {
  return (
    <Overlay className="flex flex-center flex-column">
      <div class="question" onClick={onClick} dangerouslySetInnerHTML = {
    {
      __html: content
    }
    }>
      </div>
    </Overlay>
  )
}

const mapStateToProps = state => {
  const active = state.gameState === GAME_STATE_QUESTION;
  if (state.questions.active != null) {
    return {
      content: state.questions.byId[state.questions.active].text,
      isActive: active
    }
  } else {
    return {
      content: null,
      isActive: active
    }
  }
}


const mapDispatchToProps = dispatch => ({
  onClick: (id) => function() {
    dispatch(switchGameState(GAME_STATE_ASSIGN_POINTS))
  }()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOverlay)

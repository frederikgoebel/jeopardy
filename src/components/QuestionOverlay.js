import React from 'react'
import { connect } from "react-redux";
import Overlay from './Overlay'
import { switchGameState, GAME_STATE_QUESTION, GAME_STATE_ASSIGN_POINTS } from '../actions/gameState'

class QuestionOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio('music.mp3');
    this.audio.loop = true;
    console.log("hey")

  }
  render() {
    const {content, onClick} = this.props
    return (
      <Overlay className="flex flex-center flex-column">
      <div className="question" onClick={onClick} dangerouslySetInnerHTML = {
      {
        __html: content
      }
      }>
      </div>
    </Overlay>
    )
  }

  componentDidMount() {
    this.audio.play();
  }

  componentWillUnmount() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
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

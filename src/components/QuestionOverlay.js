import { connect } from "react-redux";
import Overlay from './Overlay'
import { switchGameState, GAME_STATE_QUESTION, GAME_STATE_ASSIGN_POINTS } from '../actions/gameState'


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
)(Overlay)

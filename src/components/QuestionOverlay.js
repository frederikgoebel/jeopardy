import { connect } from "react-redux";
import { showAssignPoints, hideQuestion } from "../actions";
import Overlay from './Overlay'


const mapStateToProps = state => {
  const overlay = state.overlays.question;
  if (overlay.questionId != null) {
    return {
      content: state.questions.byId[state.questions.active].text,
      isActive: overlay.isActive
    }
  } else {
    return {
      content: null,
      isActive: overlay.isActive
    }
  }
}


const mapDispatchToProps = dispatch => ({
  onClick: (id) => function() {
    dispatch(showAssignPoints());
    dispatch(hideQuestion())
  }()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay)

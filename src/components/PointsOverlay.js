import React from "react";
import { connect } from "react-redux";
import { hideAssignPoints, addScore } from "../actions";


const PointsOverlay = ({players, isActive, points, onNameClick}) => {
  if (isActive) {
    return (
      <div className="overlay">
        {players.allIds.map((id) => <a onClick={(e) => onNameClick(id, points)} key={id}>{players.byId[id].name}</a>)}
      </div>
    )
  } else {
    return null
  }
}


const mapStateToProps = state => {
  return {
    players: state.players,
    isActive: state.overlays.points.isActive,
    points: (state.overlays.points.isActive ? state.questions.byId[state.questions.active].value : 0),
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onNameClick: (player, points) => {
      dispatch(hideAssignPoints())
      dispatch(addScore(player, points))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsOverlay)

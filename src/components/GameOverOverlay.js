import React from "react";
import { connect } from "react-redux";
import Overlay from './Overlay'

const GameOverOverlay = ({isGameOver, winner, onClick}) => {
  if (winner.length === 1) {
    return (
      <Overlay>
        <h2 >{winner[0].name} wins!</h2>
        <h3 >Score: {winner[0].score}</h3>
        <a key={"button"}onClick={(e) => onClick()}>New Game</a>
      </Overlay>
    )
  }

  return (
    <Overlay>
    <h3>Tie:</h3>
    {winner.map((win) => (
      <div key={win.id}>
      <h4>{win.name}</h4>
      <h5>Score: {win.score}</h5>
      </div>)
    )}
  </Overlay>
  )
}

const mapStateToProps = state => {
  const {players, questions} = state

  var winner = []
  players.allIds.forEach((id) => {
    if (winner.length === 0 || players.byId[id].score >= winner[0].score)
      winner.push({
        ...players.byId[id],
        id: id
      })
  })

  return {
    winner: winner
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      console.log("Not implemented: Restart")
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOverOverlay)

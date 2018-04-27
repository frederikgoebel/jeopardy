import React from "react";
import { connect } from "react-redux";

const GameOverOverlay = ({isGameOver, winner, onClick}) => {
  if (!isGameOver)
    return null

  if (winner.length === 1) {
    return (
      <div className="overlay">
        <h2 >{winner[0].name} wins!</h2>
        <h3 >Score: {winner[0].score}</h3>
        <a key={"button"}onClick={(e) => onClick()}>New Game</a>
      </div>
    )
  }

  return (
    <div className="overlay">
    <h3>Tie:</h3>
    {winner.map((win) => (
      <div key={win.id}>
      <h4>{win.name}</h4>
      <h5>Score: {win.score}</h5>
      </div>)
    )}
  </div>
  )
}



const mapStateToProps = state => {
  const {players, questions} = state

  var notAnswerd = 0
  questions.allIds.forEach((id) => {
    if (!questions.byId[id].isAnswered) {
      notAnswerd++
    }
  })
  var winner = []
  players.allIds.forEach((id) => {
    if (winner.length === 0 || players.byId[id].score >= winner[0].score) {
      winner.push({
        ...players.byId[id],
        id: id
      }
      )

    }
  })
  return {
    winner: winner,
    isGameOver: notAnswerd === 0
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

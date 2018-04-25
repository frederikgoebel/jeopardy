import React from 'react'

const PlayerScore = ({playerName, score}) => {
  return (
    <div className="playerScore">
        <b>{playerName}</b><br />
        <span className="score">{score}</span>
      </div>
  )
}

export default PlayerScore

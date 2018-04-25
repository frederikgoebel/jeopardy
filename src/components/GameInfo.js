import React from 'react'
import { connect } from "react-redux";
import PlayerScore from './PlayerScore'
import { toggleFullscreen } from '../helper'

const GameInfo = ({players}) => {
  const playerScores = players.allIds.map((id) => <PlayerScore key={players.byId[id].name} playerName={players.byId[id].name} score={players.byId[id].score} />)
  return (
    <div id="gameInfo">
    {playerScores}
    <button onClick={toggleFullscreen}>Fullscreen</button>
    </div>
  )
}

const mapStateToProps = state => ({
  players: state.players,
})

export default connect(
  mapStateToProps,
)(GameInfo)

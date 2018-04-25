import React from 'react'
import Board from './Board';
import GameInfo from './GameInfo'
import QuestionOverlay from './QuestionOverlay'
import PointsOverlay from './PointsOverlay'

const Game = ({players}) => (
  <div className="game">
  <PointsOverlay />
  <QuestionOverlay />
    <Board/>
    <GameInfo players={players}/>
  </div>
)

export default Game

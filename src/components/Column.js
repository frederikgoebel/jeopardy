import React from 'react'
import Card from './Card'

const Column = ({name, questions, questionIds, onCardClick}) => (
  <div className="column">
    <h2>{name}</h2>
    {questionIds.map((id, i) => <Card id={id} key={id} value={(i + 1) * 200} onClick={onCardClick} wasAnswered={questions.byId[id].isAnswered}/>)}
  </div>
)

export default Column

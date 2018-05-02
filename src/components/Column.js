import React from 'react'
import Card from './Card'

const Column = ({name, questions, questionIds, onCardClick}) => (
  <div className="column">
    <h3>{name}</h3>
    {questionIds.map((id, i) => <Card id={id} key={id} value={questions.byId[id].value} onClick={onCardClick} wasAnswered={questions.byId[id].isAnswered}/>)}
  </div>
)

export default Column

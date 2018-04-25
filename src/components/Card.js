import React from 'react'

const Card = ({id, wasAnswered, value, onClick}) => {
  if (wasAnswered) {
    return (
      <button className={"card wasAnswered"}>
      {value}
    </button>
    )
  } else {
    return (
      <button onClick={(e) => onClick(id)} className={"card"}>
      {value}
    </button>
    )
  }
}

export default Card

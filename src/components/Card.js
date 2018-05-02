import React from 'react'

const Card = ({id, wasAnswered, value, onClick}) => {
  if (wasAnswered) {
    return (
      <button className={"card wasAnswered"}>
      <h3>{value}</h3>
    </button>
    )
  } else {
    return (
      <button onClick={(e) => onClick(id)} className={"card " + "v-" + value}>
      <h3>{value}</h3>
    </button>
    )
  }
}

export default Card

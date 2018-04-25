import React from 'react'

const Overlay = ({content, isActive, onClick}) => {
  if (isActive) {
    return (
      <div onClick={onClick} className="overlay" dangerouslySetInnerHTML = {
      {
        __html: content
      }
      }>
      </div>
    )
  } else {
    return null
  }
}

export default Overlay

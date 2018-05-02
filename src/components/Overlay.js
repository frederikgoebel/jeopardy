import React from 'react'

const Overlay = ({children, className}) => {
  return (
    <div className={"overlay " + className}>
      {children}
    </div>
  )

}

export default Overlay

import React from 'react'

export const BoilingVerdict = ({celsius}) => {
  return (
    <div>
      {celsius >= 100
      ? <p>The water would boil.</p>
      : <p>The water would not boil.</p>}
    </div>
  )
}

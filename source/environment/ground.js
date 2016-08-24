import React from 'react'


export const Ground = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        bottom: position[0],
        left: position[1],
        background: `url('images/brick.png')`
      }}
    >
    </div>
  )
}

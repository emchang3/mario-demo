import React from 'react'
import { connect } from 'react-redux'

import HeroKeyHandler from './heroKeyHandler'


const Mario = ({ mario }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: mario.position[0],
        left: mario.position[1],
        width: '100px',
        height: '150px',
        border: '1px dotted black'
      }}
    >
      <HeroKeyHandler />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '50%',
          top: '0%',
          border: '1px dotted red'
        }}
      >
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '50%',
          bottom: '0%',
          border: '1px dotted blue'
        }}
      >
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    mario: state.mario
  }
}

export default connect(mapStateToProps)(Mario)

import React from 'react'
import { connect } from 'react-redux'

import { setMoving, setPosition, setFacing } from './heroActions'


class HeroKeyHandler extends React.Component {
  constructor(props) {
    super(props)
  }

  keyDown = (event) => {
    switch (event.key) {
      case 'd':
        if (this.props.mario.moving === false || this.props.mario.facing === 'left') {
          this.props.setMoving(true)
          this.props.setFacing('right')
          window.addEventListener('keyup', this.keyUp)
          this.hShift('right')
        }
        break
      case 'a':
        if (this.props.mario.moving === false || this.props.mario.facing === 'right') {
          this.props.setMoving(true)
          this.props.setFacing('left')
          window.addEventListener('keyup', this.keyUp)
          this.hShift('left')
        }
        break
      default:
        break
    }
  }

  hShift = (direction) => {
    const startTime = new Date().getTime()
    const startPos = this.props.mario.position[1]

    const horizontalTimer = setInterval(() => {
      let step = Math.min(1, (new Date().getTime() - startTime) / 5000)
      let increment = step * parseFloat(window.innerWidth)
      let style = this.props.mario.position
      direction === 'right' ? style[1] = startPos + increment : style[1] = startPos - increment
      this.props.setPosition(style)
      if (
          step === 1
          || this.props.mario.moving === false
          || this.props.mario.facing !== direction
      ) {
        clearInterval(horizontalTimer)
      }
    }, 0.0001)
  }

  keyUp = (event) => {
    if (event.key === 'd' && this.props.mario.facing === 'right') {
      this.props.setMoving(false)
    }
    else if (event.key === 'a' && this.props.mario.facing === 'left') {
      this.props.setMoving(false)
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.keyDown)
    // window.addEventListener('keypress', this.keyPress)
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    mario: state.mario
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    setMoving: (isMoving) => dispatch(setMoving(isMoving)),
    setPosition: (position) => dispatch(setPosition(position)),
    setFacing: (direction) => dispatch(setFacing(direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroKeyHandler)

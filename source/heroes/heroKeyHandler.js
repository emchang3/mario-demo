import React from 'react'
import { connect } from 'react-redux'

import { setMoving, setPosition, setFacing, setHeading, setJumping } from './heroActions'


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
      let step = Math.min(1, (new Date().getTime() - startTime) / 4000)
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

  vShift = (orientation) => {
    const startTime = new Date().getTime()
    const startPos = this.props.mario.position[0]

    const horizontalTimer = setInterval(() => {
      let step = Math.min(1, (new Date().getTime() - startTime) / 400)
      let increment = orientation === 'up' ? Math.pow(step, 0.5) * 175 : Math.pow(step, 2) * 175
      let style = this.props.mario.position
      orientation === 'up' ? style[0] = startPos + increment : style[0] = startPos - increment
      this.props.setPosition(style)
      if (
        step === 1
        || this.props.mario.jumping === false
      ) {
        clearInterval(horizontalTimer)
        if (orientation === 'down') {
          this.props.setHeading('none')
          this.props.setJumping(false)
        }
        if (orientation === 'up') {
          this.props.setHeading('down')
          this.vShift('down')
        }
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

  keyPress = (event) => {
    if (event.key === ' ' && this.props.mario.jumping === false) {
      this.props.setJumping(true)
      this.props.setHeading('up')
      this.vShift('up')
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keypress', this.keyPress)
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
    setFacing: (direction) => dispatch(setFacing(direction)),
    setHeading: (orientation) => dispatch(setHeading(orientation)),
    setJumping: (isJumping) => dispatch(setJumping(isJumping))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroKeyHandler)

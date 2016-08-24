export const SET_MOVING = 'SET_MOVING'
export const SET_POSITION = 'SET_POSITION'
export const SET_FACING = 'SET_FACING'
export const SET_JUMPING = 'SET_JUMPING'
export const SET_HEADING = 'SET_HEADING'


export const setMoving = (isMoving) => {
  return {
    type: SET_MOVING,
    isMoving: isMoving
  }
}

export const setPosition = (position) => {
  return {
    type: SET_POSITION,
    position: position
  }
}

export const setFacing = (direction) => {
  return {
    type: SET_FACING,
    direction: direction
  }
}

export const setJumping = (isJumping) => {
  return {
    type: SET_JUMPING,
    isJumping: isJumping
  }
}

export const setHeading = (orientation) => {
  return {
    type: SET_HEADING,
    orientation: orientation
  }
}

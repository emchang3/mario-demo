export const SET_MOVING = 'SET_MOVING'
export const SET_POSITION = 'SET_POSITION'
export const SET_FACING = 'SET_FACING'

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

// import { combineReducers } from 'redux'

import {
  SET_MOVING,
  SET_POSITION,
  SET_FACING,
  SET_JUMPING,
  SET_HEADING
} from './heroes/heroActions'


function reducer(state = {}, action) {
  // console.log('reducing', action)
  switch (action.type) {
    case SET_MOVING:
      return { ...state, mario: { ...state.mario, moving: action.isMoving } }
    case SET_POSITION:
      return { ...state, mario: { ...state.mario, position: action.position } }
    case SET_FACING:
      return { ...state, mario: { ...state.mario, facing: action.direction } }
    case SET_JUMPING:
      return { ...state, mario: { ...state.mario, jumping: action.isJumping } }
    case SET_HEADING:
      return { ...state, mario: { ...state.mario, heading: action.orientation } }
    default:
      return state
  }
}

export default reducer

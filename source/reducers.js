// import { combineReducers } from 'redux'

import { SET_MOVING, SET_POSITION, SET_FACING } from './heroes/heroActions'


function reducer(state = {}, action) {
  // console.log('general action', action)
  switch (action.type) {
    case SET_MOVING:
      return { ...state, mario: { ...state.mario, moving: action.isMoving } }
    case SET_POSITION:
      return { ...state, mario: { ...state.mario, position: action.position } }
    case SET_FACING:
      return { ...state, mario: { ...state.mario, facing: action.direction } }
    default:
      return state
  }
}

export default reducer

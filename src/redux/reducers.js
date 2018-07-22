import { combineReducers } from 'redux'
import * as types from './actionTypes'

const grid = (state = {}, action) => {
  switch (action.type) {
    case types.SET_GRID_COLORS:
      return { ...state, gridColors: action.payload }
    default:
      return state
  }
}

export default combineReducers({ grid })

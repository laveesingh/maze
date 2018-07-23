import store from './store'
import { setGridColors } from './actions'
import getDeepCopy from '../utils/getDeepCopy'

export const changeCellColor = (row, col, color) => {
  const {
    grid: { gridColors }
  } = store.getState()
  if (!gridColors) {
    return
  }
  const currentGridColours = getDeepCopy(gridColors)
  currentGridColours[row][col] = color
  store.dispatch(setGridColors(currentGridColours))
}

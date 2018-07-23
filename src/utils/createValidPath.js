import theme from '../config/theme'
import containsArray from './arrayContains'
import { changeCellColor } from '../redux/commons'

const STARTR = 0
const STARTC = 1
const ENDR = theme.rows - 2
const ENDC = theme.cols - 1

const DX = [0, 1, 0, -1]
const DY = [1, 0, -1, 0]

export const isLight = (row, col) => row % 2 && col % 2
export const isMedium = (row, col) =>
  (row % 2 && col % 2 === 0) || (row % 2 === 0 && col % 2)
export const isDark = (row, col) => row % 2 === 0 && col % 2 === 0

const isValidNeighbor = (nextR, nextC, pathArray) => {
  if (nextR < 0 || nextC < 0) {
    return false
  } else if (nextR >= theme.rows || nextC >= theme.cols) {
    return false
  } else if (containsArray(pathArray, [nextR, nextC])) {
    return false
  } else if (isDark(nextR, nextC)) {
    return false
  }
  return true
}

const getRandomFromArray = array => {
  console.log(array)
  if (array.length > 1) {
    const index = parseInt((Math.random() * 10) % array.length)
    return array[index]
  }
  return array[0]
}

const createValidPath = (
  currentR = STARTR,
  currentC = STARTC,
  pathArray = [[STARTR, STARTC]]
) => {
  const validNeighbors = []
  for (let i = 0; i < 4; i++) {
    let nextR = currentR + DX[i]
    let nextC = currentC + DY[i]
    if (isValidNeighbor(nextR, nextC, pathArray)) {
      validNeighbors.push([nextR, nextC])
    }
  }
  if (!validNeighbors.length) {
    return
  }
  let chosenNeighbor = getRandomFromArray(validNeighbors)
  // console.log(chosenNeighbor)
  chosenNeighbor &&
    changeCellColor(chosenNeighbor[0], chosenNeighbor[1], theme.colorSelected)
  console.log(chosenNeighbor)
  if (chosenNeighbor[0] === ENDR && chosenNeighbor[1] === ENDC) {
    return
  }
  pathArray.push(chosenNeighbor)
  console.log(pathArray)
  setTimeout(
    () => createValidPath(chosenNeighbor[0], chosenNeighbor[1], pathArray),
    100
  )
}

export default createValidPath

import isArrayEqual from './isArrayEqual'

/*
 * tells whether `array` contains `elemArray`
*/

const containsArray = (array, elemArray) => {
  let contains = false
  array.forEach(elem => {
    if (isArrayEqual(elem, elemArray)) {
      contains = true
    }
  })
  return contains
}

export default containsArray

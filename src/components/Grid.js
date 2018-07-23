import React from 'react'
import Row from './Row'
import theme from '../config/theme'
import { connect } from 'react-redux'
import { setGridColors } from '../redux/actions'
import { func, string, arrayOf } from 'prop-types'
import createValidPath from '../utils/createValidPath'

class Grid extends React.Component {
  static propTypes = {
    setGridColors: func.isRequired,
    gridColors: arrayOf(arrayOf(string))
  }

  _initGridColors = () => {
    const { rows, cols } = theme
    const { setGridColors } = this.props
    let gridColors = []
    for (let i = 0; i < rows; i++) {
      gridColors.push(Array.from(Array(cols)))
      for (let j = 0; j < cols; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
          gridColors[i][j] = theme.colorDark
        } else if (i % 2 && j % 2) {
          gridColors[i][j] = theme.colorLight
        } else {
          gridColors[i][j] = theme.colorMedium
        }
      }
    }
    setGridColors(gridColors)
  }

  componentDidMount() {
    setTimeout(this._initGridColors)
    setTimeout(createValidPath)
  }

  render() {
    const { rows, cols } = theme
    return (
      <div>
        {Array.from(Array(rows)).map((none, row) => (
          <Row key={row} cols={cols} row={row} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ grid: { gridColors } = {} }) => ({
  gridColors
})

const mapDispatchToProps = {
  setGridColors
}

Grid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default Grid

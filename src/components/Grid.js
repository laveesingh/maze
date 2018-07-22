import React from 'react'
import Row from './Row'
import theme from '../config/theme'
import { connect } from 'react-redux'
import { setGridColors } from '../redux/actions'

class Grid extends React.Component {
  initGridColors = () => {
    const { rows, cols } = theme
    let gridColors = []
    for (let i = 0; i < rows; i++) {
      gridColors.push(Array.from(Array(cols)))
      for (let j = 0; j < cols; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
          gridColors[i][j] = 'dark'
        } else if (i % 2 && j % 2) {
          gridColors[i][j] = 'light'
        } else {
          gridColors[i][j] = 'medium'
        }
      }
    }
    this.props.setGridColors(gridColors)
  }

  componentDidMount() {
    this.initGridColors()
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

const mapDispatchToProps = {
  setGridColors
}

Grid = connect(
  null,
  mapDispatchToProps
)(Grid)

export default Grid

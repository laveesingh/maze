import React from 'react'
import { string, number } from 'prop-types'
import styled from 'styled-components'
import theme from '../config/theme'
import { connect } from 'react-redux'

class Cell extends React.Component {
  static propTypes = {
    className: string.isRequired,
    row: number.isRequired,
    col: number.isRequired
  }

  render() {
    let { className, gridColors, row, col } = this.props
    const cellType = gridColors && gridColors[row][col]
    className = `${className} ${cellType}`
    return <div className={className} />
  }
}

Cell = styled(Cell)`
  width: ${theme.cellWidth};
  height: ${theme.cellHeight};
  border: 1px solid grey;
  &.dark {
    background-color: darkblue;
  }
  &.medium {
    background-color: blue;
  }
  &.light {
    background-color: white;
  }
`

const mapStateToProps = ({ grid: { gridColors } = {} }) => ({
  gridColors
})
Cell = connect(mapStateToProps)(Cell)

export default Cell

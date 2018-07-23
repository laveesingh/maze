import React from 'react'
import { string, number, arrayOf } from 'prop-types'
import styled from 'styled-components'
import theme from '../config/theme'
import { connect } from 'react-redux'
import { changeCellColor } from '../redux/commons'

class Cell extends React.Component {
  static propTypes = {
    className: string.isRequired,
    row: number.isRequired,
    col: number.isRequired,
    gridColors: arrayOf(arrayOf(string))
  }

  _onClick = () => {
    const { row, col, gridColors } = this.props
    if (!gridColors || gridColors[row][col] !== theme.colorLight) {
      return
    }
    changeCellColor(row, col, theme.colorSelected)
  }

  render() {
    let { className, gridColors, row, col } = this.props
    const cellType = gridColors && gridColors[row][col]
    className = `${className} ${cellType}`
    return <div className={className} onClick={this._onClick} />
  }
}

Cell = styled(Cell)`
  width: ${theme.cellWidth};
  height: ${theme.cellHeight};
  ${'' /* border: 1px solid grey; */} cursor: pointer;
  background: ${props =>
    props.gridColors && props.gridColors[props.row][props.col]};
  transition: background 1s ease-in-out;
`

const mapStateToProps = ({ grid: { gridColors } = {} }) => ({
  gridColors
})
Cell = connect(mapStateToProps)(Cell)

export default Cell

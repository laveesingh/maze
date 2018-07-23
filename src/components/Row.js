import React from 'react'
import Cell from './Cell'
import uuid from 'uuid4'
import styled from 'styled-components'
import { number, string } from 'prop-types'

class Row extends React.Component {
  static propTypes = {
    cols: number.isRequired,
    row: number.isRequired,
    className: string.isRequired
  }

  render() {
    const { cols, className, row } = this.props
    return (
      <div className={className}>
        {Array.from(Array(cols)).map((none, col) => (
          <Cell key={uuid()} row={row} col={col} />
        ))}
      </div>
    )
  }
}

Row = styled(Row)`
  & > * {
    display: inline-block;
  }
  line-height: 0px;
`

export default Row

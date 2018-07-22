import React from 'react'
import Cell from './Cell'
import uuid from 'uuid4'
import styled from 'styled-components'

class Row extends React.Component {
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

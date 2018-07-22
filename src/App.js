import React, { Component } from 'react'
import Grid from './components/Grid'
import styled from 'styled-components'

class App extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <Grid />
      </div>
    )
  }
}

App = styled(App)`
  width: 100%;
  height: 700px;
  align-items: center;
  justify-content: center;
  display: flex;
`

export default App

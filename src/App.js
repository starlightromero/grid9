import React from 'react'
import Game from './components/Game'
import styled from 'styled-components'

const StyledApp = styled.div`
  font-family: 'Lexend Giga', sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 5vh;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const App = () => (
  <StyledApp>
    <Game />
  </StyledApp>
)

export default App

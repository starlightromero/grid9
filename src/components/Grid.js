import React from 'react'
import GridItem from './GridItem'
import background from '../assets/grid.png'
import styled from 'styled-components'

const Grid = ({ signs, onClick }) => (
  <>
    <Background src={background} alt="grid" />
    <StyledGrid>
      {signs.map((sign, i) => (
        <GridItem key={i} sign={sign} id={i} onClick={() => onClick(i)} />
      ))}
    </StyledGrid>
  </>
)

const Background = styled.img`
  width: 50vh;
  height: 50vh;
  z-index: 0;
  margin-top: 5vh;
`

const StyledGrid = styled.div`
    width: 50vh;
    height: 50vh;
    margin-top: 5vh;
    position: absolute;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    z-index: 1;
`

export default Grid

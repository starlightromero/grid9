import React from 'react'
import GridItem from './GridItem'
import styled from 'styled-components'

const Grid = ({ signs, onClick }, ref) => (
  <StyledGrid>
    {signs.map((sign, i) => (
      <GridItem key={i} sign={sign} ref={ref} id={i} onClick={() => onClick(i)} />
    ))}
  </StyledGrid>
)

const forwardedGrid = React.forwardRef(Grid)

const StyledGrid = styled.div`
  width: 30rem;
  height: 30rem;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  background-image: linear-gradient(to right, #00ffff, #8a2be2, #00ffff);
`

export default forwardedGrid

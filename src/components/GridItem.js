import React from 'react'
import styled from 'styled-components'

const GridItem = ({ sign, onClick }) => (
  <StyledGridItem onClick={onClick}>
    <Img src={sign} alt=""/>
  </StyledGridItem>
)

const StyledGridItem = styled.button`
  border: none;
  background: transparent;
  background-position: none;
`

const Img = styled.img`
  height: 10vh;
`

export default GridItem

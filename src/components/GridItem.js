import React from 'react'
import styled from 'styled-components'

const GridItem = ({ sign, id, onClick }) => (
  <StyledGridItem onClick={onClick}>
    <Img src={sign} id={id}/>
  </StyledGridItem>
)

const StyledGridItem = styled.button`
  border: none;
  background: transparent;
  background-position: none;
  cursor: pointer;
`

const Img = styled.img`
  height: 10vh;
  visibility: hidden;
`

export default GridItem

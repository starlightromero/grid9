import React from 'react'
import styled from 'styled-components'

const GridItem = ({ sign, id, onClick }) => (
  <StyledGridItem onClick={onClick}>
    <Img src={sign} id={id}/>
  </StyledGridItem>
)

const StyledGridItem = styled.button`
  border: none;
  margin: 0.5vh;
  background: #f6effc;
  cursor: pointer;
`

const Img = styled.img`
  height: 10vh;
  width: 10vh;
  visibility: hidden;
`

export default GridItem

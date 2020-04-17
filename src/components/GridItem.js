import React from 'react'
import styled from 'styled-components'

const imgStyle = {
  visibility: 'hidden',
}

const GridItem = ({ sign, id, onClick }, ref) => (
  <StyledGridItem onClick={onClick}>
    <Img src={sign} style={imgStyle} id={id} ref={ref}/>
  </StyledGridItem>
)

const forwardedGridItem = React.forwardRef(GridItem)

const StyledGridItem = styled.button`
  border: none;
  margin: 0.5vh;
  background: #f6effc;
  cursor: pointer;
`

const Img = styled.img`
  height: 10vh;
  width: 10vh;
`

export default forwardedGridItem

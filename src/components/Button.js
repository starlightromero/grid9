import React from 'react'
import styled from 'styled-components'

const Button = ({ src, alt, onClick }) => (
  <StyledButton onClick={onClick}>
    <ButtonImg src={src} alt={alt} />
  </StyledButton>
)

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const ButtonImg = styled.img`
  height: 8vw;
`

export default Button

import React from 'react'
import Button from './Button'
import settings from '../assets/settings.png'
import add from '../assets/add.png'
import styled from 'styled-components'

const Header = ({ onClick }) => (
  <Heading>
    <Button src={settings} alt="settings" onClick={() => {alert('settings clicked')}} />
    <Title>
      <H1>Grid9</H1>
      <H3>The grid is your battlefield</H3>
    </Title>
    <Button src={add} alt="add" onClick={onClick} />
  </Heading>
)

const Heading = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 3px solid #00ffff;
  width: 100%;
  background: white;
  padding: 1vw;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  background-image: linear-gradient(to right, #00ffff, #8a2be2, #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 7vw;
  color: transparent;
  margin: 0;
`

const H3 = styled.h3`
  font-size: 1vw;
  margin: 0;
`

export default Header

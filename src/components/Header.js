import React from 'react'
import Settings from './Settings'
import NewGame from './NewGame'

const Header = ({ onClick }) => (
  <header style={headerStyle}>
    <Settings />
    <div style={titleStyle}>
      <h1 style={h1Style}>Grid9</h1>
      <h3 style={h3Style}>The grid is your battlefield</h3>
    </div>
    <NewGame onClick={onClick} />
  </header>
)

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottom: '3px solid #00ffff',
  width: '100%',
  background: 'white',
  padding: '1vw',
}

const titleStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const h1Style = {
  backgroundImage: 'linear-gradient(to right, #00ffff, #8a2be2, #00ffff)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  fontSize: '7vw',
  color: 'transparent',
  margin: 0,
}

const h3Style = {
  fontSize: '1vw',
  margin: 0,
}

export default Header

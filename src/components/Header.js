import React from 'react'

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '3px solid #00ffff',
  width: '100%',
}

const h1Style = {
  backgroundImage: 'linear-gradient(to right, #00ffff, #8a2be2, #00ffff)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  fontSize: '12vh',
  color: 'transparent',
  margin: 0,
}

const h3Style = {
  fontSize: '2vh',
  margin: 0,
  marginBottom: '4vh',
}

const Header = () => (
  <header style={headerStyle}>
    <h1 style={h1Style}>Grid9</h1>
    <h3 style={h3Style}>The grid is your battlefield</h3>
  </header>
)

export default Header

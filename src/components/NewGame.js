import React from 'react'

const buttonStyle = {
  background: 'none',
  border: '0.3vh solid black',
  borderRadius: '5vh',
  padding: '2.5vh',
  textTransform: 'uppercase',
  fontFamily: 'Lexend Giga, sans-serif',
  fontSize: '2vh',
  margin: '3vh',
}

const NewGame = ({ onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      New Game
    </button>
  )
}

export default NewGame

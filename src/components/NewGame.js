import React from 'react'
import add from '../assets/add.png'

const NewGame = ({ onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    <img src={add} style={imgStyle} alt="add" />
  </button>
)

const buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}

const imgStyle = {
  height: '8vw',
}

export default NewGame

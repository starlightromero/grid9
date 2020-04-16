import React from 'react'

const style = {
  fontFamily: 'Lexend Giga, sans-serif',
  fontSize: '5vh',
}

const GridItem = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

export default GridItem

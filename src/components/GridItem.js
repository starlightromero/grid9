import React from 'react'

const style = {
  fontFamily: 'Lexend Giga, sans-serif',
  fontSize: '5vh',
}

const GridItem = ({ sign, onClick }) => (
  <button style={style} onClick={onClick}>
    <img src={sign} />
  </button>
)

export default GridItem

import React from 'react'

const style = {
  border: 'none',
  background: 'transparent',
}

const imgStyle = {
  height: '10vh',
}

const GridItem = ({ sign, onClick }) => (
  <button style={style} onClick={onClick}>
    <img style={imgStyle} src={sign} />
  </button>
)

export default GridItem

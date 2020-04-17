import React from 'react'

const GridItem = ({ sign, onClick }) => (
  <button style={style} onClick={onClick}>
    <img style={imgStyle} src={sign} alt=""/>
  </button>
)

const style = {
  border: 'none',
  background: 'transparent',
  backgroundPosition: 'none',
}

const imgStyle = {
  height: '10vh',
}

export default GridItem

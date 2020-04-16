import React from 'react'

const style = {
  border: 'none',
  background: 'transparent',
  backgroundPosition: 'none',
}

const imgStyle = {
  height: '10vh',
}

const GridItem = ({ sign, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      <img style={imgStyle} src={sign} alt=""/>
    </button>
  )
}

export default GridItem

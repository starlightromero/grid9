import React from 'react'

const style = {
  border: 'none',
  background: 'transparent',
  backgroundPosition: 'none',
}

const imgStyle = {
  height: '10vh',
}

const GridItem = ({ key, sign, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      <img key={key} style={imgStyle} src={sign} alt="alt"/>
    </button>
  )
}

export default GridItem

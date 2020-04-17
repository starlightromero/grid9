import React from 'react'
import GridItem from './GridItem'
import background from '../assets/grid.png'

const Grid = ({ signs, onClick }) => (
  <>
    <img style={backgroundStyle} src={background} alt="grid" />
    <div style={style}>
      {signs.map((sign, i) => (
        <GridItem key={i} sign={sign} onClick={() => onClick(i)} />
      ))}
    </div>
  </>
)

const style = {
    width: '50vh',
    height: '50vh',
    marginTop: '5vh',
    position: 'absolute',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    zIndex: '1',
};

const backgroundStyle = {
  width: '50vh',
  height: '50vh',
  zIndex: '0',
  marginTop: '5vh',
}

export default Grid

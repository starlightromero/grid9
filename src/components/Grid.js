import React from 'react'
import GridItem from './GridItem'

const style = {
    border: '4px solid darkblue',
    width: '50vh',
    height: '50vh',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Grid = ({ signs, onClick }) => (
  <>
    <div style={style}>
      {signs.map((sign, i) => (
        <GridItem key={i} sign={sign} onClick={() => onClick(i)} />
      ))}
    </div>
  </>
)

export default Grid

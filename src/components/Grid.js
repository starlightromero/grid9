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

const Grid = ({ items, onClick }) => (
  <>
    <div style={style}>
      {items.map((item, i) => (
        <GridItem key={i} value={item} onClick={() => onClick(i)} />
      ))}
    </div>
  </>
)

export default Grid

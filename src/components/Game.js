import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'
import { calculateWinner } from '../helper'
import x from '../assets/x.png'
import o from '../assets/o.png'

const buttonStyle = {
  background: 'none',
  border: '0.3vh solid black',
  borderRadius: '5vh',
  padding: '2.5vh',
  textTransform: 'uppercase',
  fontFamily: 'Lexend Giga, sans-serif',
  fontSize: '2vh',
  margin: '3vh',
}

const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const winner = calculateWinner(grid)

  const handleClick = i => {
    const checkGrid = [...grid]
    if (winner || checkGrid[i]) return;
    checkGrid[i] = isXTurn ? x : o
    setGrid(checkGrid)
    setIsXTurn(!isXTurn)
  }

  const sign = () => isXTurn ? x : o

  const newGame = () => (
    <button style={buttonStyle} onClick={() => setGrid(Array(9).fill(null))}>
      New Game
    </button>
  )

  return (
    <>
      <Header />
      {newGame()}
      <Grid signs={grid} onClick={handleClick} />
      <div>
        <p>{winner ? 'Winner: ' + (winner === x ? 'x' : 'o') : 'Next Player: ' + (isXTurn ? 'x' : 'o')}</p>
      </div>
    </>
  )
}

export default Game

import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'
import { calculateWinner } from '../helper'
import x from '../assets/x.png'
import o from '../assets/o.png'

const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const winner = calculateWinner(grid)

  const handleNewGame = () => {
    setGrid(Array(9).fill(null))
  }

  const handleTurn = i => {
    const checkGrid = [...grid]
    if (winner || checkGrid[i]) return;
    checkGrid[i] = isXTurn ? x : o
    setGrid(checkGrid)
    setIsXTurn(!isXTurn)
  }

  return (
    <>
      <Header onClick ={handleNewGame} />
      <Grid signs={grid} onClick={handleTurn} />
      <div>
        <p>{winner ? 'Winner: ' + (winner === x ? 'x' : 'o') : 'Next Player: ' + (isXTurn ? 'x' : 'o')}</p>
      </div>
    </>
  )
}

export default Game

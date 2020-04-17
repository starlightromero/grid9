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
    document.getElementById('0').style.visibility = 'hidden'
    document.getElementById('1').style.visibility = 'hidden'
    document.getElementById('2').style.visibility = 'hidden'
    document.getElementById('3').style.visibility = 'hidden'
    document.getElementById('4').style.visibility = 'hidden'
    document.getElementById('5').style.visibility = 'hidden'
    document.getElementById('6').style.visibility = 'hidden'
    document.getElementById('7').style.visibility = 'hidden'
    document.getElementById('8').style.visibility = 'hidden'
    setIsXTurn(true)
  }

  const handleTurn = i => {
    const checkGrid = [...grid]
    if (winner || checkGrid[i]) return
    checkGrid[i] = isXTurn ? x : o
    document.getElementById(i).style.visibility = 'visible'
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

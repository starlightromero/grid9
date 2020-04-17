import React, { useState, useRef } from 'react'
import Header from './Header'
import Grid from './Grid'
import { calculateWinner } from '../helper'
import x from '../assets/x.png'
import o from '../assets/o.png'
import styled from 'styled-components'

const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const winner = calculateWinner(grid)

  const gridItemRef = useRef(null)

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
    console.log(gridItemRef.current)
    document.getElementById(i).style.visibility = 'visible'
    setGrid(checkGrid)
    setIsXTurn(!isXTurn)
  }

  return (
    <>
      <Header onClick ={handleNewGame} />
      <Main>
        <Grid signs={grid} ref={gridItemRef} onClick={handleTurn} />
        <p>{winner ? 'Winner: ' + (winner === x ? 'x' : 'o') : 'Next Player: ' + (isXTurn ? 'x' : 'o')}</p>
      </Main>
    </>
  )
}

const Main = styled.div`
  position: fixed;
  top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Game

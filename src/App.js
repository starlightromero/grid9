import React from 'react'
import Game from './components/Game'

const style = {
  fontFamily: 'Lexend Giga, sans-serif',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '5vh',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}

const App = () => {
  return (
    <div className="App" style={style}>
      <Game />
    </div>
  );
}

export default App;

import React from 'react'
import settings from '../assets/settings.png'

const Settings = () => {
  const handleClick = () => {
    alert('settings clicked')
  }

  return (
    <button style ={buttonStyle} onClick={handleClick}>
      <img src={settings} style={imgStyle} alt="settings" />
    </button>
  )
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}

const imgStyle = {
  height: '8vw',
}

export default Settings

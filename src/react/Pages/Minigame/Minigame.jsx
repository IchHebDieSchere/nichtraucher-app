import React from 'react'
import { Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import tetrisImg from './tetris.png'

const Minigame = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        flex: ' 1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Mini game</h2>
      {/* Image source: https://simple.wikipedia.org/wiki/Tetris */}
      <img
        src={tetrisImg}
        alt="minigame"
        style={{ width: '300px', height: 'auto' }}
      />
      <br />
      <Button
        variant="outlined"
        onClick={() => navigate('/feedback')}
      >
        Continue
      </Button>
    </Stack>
  )
}

export default Minigame

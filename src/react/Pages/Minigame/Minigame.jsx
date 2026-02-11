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
        sx={{ mb: 8 }}
        variant="contained"
        onClick={() => navigate('/feedback')}
      >
        Finish
      </Button>
    </Stack>
  )
}

export default Minigame

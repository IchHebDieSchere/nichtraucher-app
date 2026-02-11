import React from 'react'
import { Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useStats from '../../../hooks/useStats'
import tetrisImg from './TetrisImage.png'

const Minigame = () => {
  const navigate = useNavigate()
  const { incrementMission } = useStats()

  return (
    <Stack
      sx={{
        flex: ' 1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Mini game</h2>
      {/* Image source: ChatGPT hat das Bild erstellt */}
      <img
        src={tetrisImg}
        alt="minigame"
        style={{ width: '300px', height: 'auto' }}
      />
      <br />
      <Button
        sx={{ mb: 8 }}
        variant="contained"
        onClick={() => {
          incrementMission()
          navigate('/feedback')
        }}
      >
        Finish
      </Button>
    </Stack>
  )
}

export default Minigame

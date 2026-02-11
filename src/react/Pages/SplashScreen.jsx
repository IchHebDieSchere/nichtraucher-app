import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree'

const SplashScreen = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setVisible(false)
    }, 1800)

    const autoRedirectTimerId = setTimeout(() => {
      const method = localStorage.getItem('selectedMethod')

      if (!method) {
        navigate('/welcome')
      } else if (method === 'game') {
        navigate('/minigame')
      } else if (method === 'breathing') {
        navigate('/boxBreathing')
      } else if (method === 'facts') {
        navigate('/facts')
      } else {
        navigate('/error')
      }
    }, 2500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(autoRedirectTimerId)
    }
  }, [])

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease-in-out'
      }}
    >
      <Typography marginBottom={1} variant="h4">RauchStopp</Typography>
      <SmokeFreeIcon sx={{ fontSize: 55 }} />
    </Stack>
  )
}

export default SplashScreen

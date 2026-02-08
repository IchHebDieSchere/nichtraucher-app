import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
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
    }, 1000)

    return () => {
      clearTimeout(autoRedirectTimerId)
    }
  }, [])

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
      <Typography>RauchStopp</Typography>
    </Stack>
  )
}

export default SplashScreen

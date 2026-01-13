import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Stack, Typography } from '@mui/material'

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const autoRedirectTimerId = setTimeout(() => {
      navigate('/welcome')
    }, 3000)

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

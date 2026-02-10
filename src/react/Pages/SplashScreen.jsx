import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Fade } from '@mui/material'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree'

const SplashScreen = () => {
  const navigate = useNavigate()
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setFade(false)
  }, [])

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
    }, 5000)

    return () => {
      clearTimeout(autoRedirectTimerId)
    }
  }, [])

  return (
    <Fade appear={false} in={fade} timeout={5200}>
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <Typography marginBottom={1} variant="h4">RauchStopp</Typography>
        <SmokeFreeIcon sx={{ fontSize: 55 }} />
      </Stack>
    </Fade>
  )
}

export default SplashScreen

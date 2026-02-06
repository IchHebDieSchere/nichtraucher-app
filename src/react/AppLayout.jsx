import React, { useState, useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'

import {
  Stack,
  Typography,
  Container,
  Paper,
  Box,
  Slide,
  Alert
} from '@mui/material'

import AppRoutes from './AppRoutes'

import AppLogo from '../assets/favicon.svg'

const borderRadius = 6

const AppLayout = () => {
  const location = useLocation()
  const [isSlide, setSlide] = useState(false)
  const [message, setMessage] = useState('')
  const prevPathRef = useRef('')

  useEffect(() => {
    const currentPath = location.pathname
    const prevPath = prevPathRef.current

    if (prevPath === '/feedback' && currentPath === '/menu') {
      setMessage('Good Job! Du hast dem Rauchdrang widerstanden!')
      setSlide(true)
      setTimeout(() => {
        setSlide(false)
      }, 3000)
    }

    prevPathRef.current = currentPath
  }, [location])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100%',
        height: '100%',
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(5)
      }}
    >
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <img
            src={AppLogo}
            alt="App Logo"
            style={{
              width: '40px',
              height: '40px'
            }}
          />
          <Typography variant="h5">
            My Mobile Health App
          </Typography>
        </Stack>
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 2,
            paddingRight: 1,
            paddingBottom: 2,
            paddingLeft: 1,
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.grey[900],
            position: 'relative'
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent={
              location.pathname.startsWith('/homescreen')
                ? 'space-between'
                : 'center'
            }
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: theme => theme.spacing(borderRadius),
              background: theme => theme.palette.background.paper,
              position: 'relative'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 20,
                left: '50%',
                zIndex: 1000,
                transform: 'translate(-50%)',
                width: '60%',
                pointerEvents: 'none'
              }}
            >
              <Slide direction="down" in={isSlide}>
                <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
                  {message}
                </Alert>
              </Slide>
            </Box>
            <AppRoutes />
            {location.pathname.startsWith('/homescreen') }
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default AppLayout

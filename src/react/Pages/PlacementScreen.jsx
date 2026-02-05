/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Popover,
  Box,
  Stack,
  Button,
  Typography,
  Slide,
  Alert
} from '@mui/material'

const PlacementScreen = () => {
  const [helpButton, setHelpButton] = useState(null)
  const [isSlide, setSlide] = useState(false)
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  const handleDone = () => {
    setSlide(true)
    setTimeout(() => {
      setSlide(false)
    }, 3000)
  }
  const handleLater = () => {
    setSlide(true)
    setTimeout(() => {
      setSlide(false)
    }, 3000)
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
      sx={{ px: 3, py: 3, position: 'relative' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          zIndex: 1000,
          transform: 'translate(-50%)',
          width: '90%'
        }}
      >
        <Slide direction="down" in={isSlide}>
          <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
            Good Job! Du hast dem Rauchdrang widerstanden!
          </Alert>
        </Slide>
      </Box>
      <Stack spacing={1} alignSelf="flex-start">
        <Button
          onClick={handleBack}
          variant="text"
          sx={{ alignSelf: 'flex-start' }}
        >
          Back
        </Button>
        <Typography>
          Platziere nun bitte das Widget auf deinem Startbildschirm
        </Typography>
        <Typography>
          Dies gibt dir einfachen und schnellen Zugriff sobald du dein Handy
          entsperrst
        </Typography>
      </Stack>
      <Box component="img" alt="*insert GIF here*" />

      <Button
        variant="outlined"
        onClick={(clickEvent) => setHelpButton(clickEvent.currentTarget)}
      >
        Widget Hilfe
      </Button>

      <Popover
        open={Boolean(helpButton)}
        anchorEl={helpButton}
        onClose={() => setHelpButton(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Box sx={{ p: 2 }}>
          <Typography>Schritt 1: Startbildschirm gedrückt halten</Typography>
          <Typography>Schritt 2: "Widgets" auswählen</Typography>
          <Typography>Schritt 3: Widget finden und platzieren</Typography>
        </Box>
      </Popover>

      <Stack alignSelf="flex-end" spacing={2}>
        <Button onClick={handleDone} variant="contained" fullWidth>
          Ich hab's gemacht
        </Button>
        <Button fullWidth onClick={handleLater} variant="text">
          Später erinnern
        </Button>
      </Stack>
    </Stack>
  )
}

export default PlacementScreen

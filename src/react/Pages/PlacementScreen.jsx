/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Popover, Box, Stack, Button, Typography } from '@mui/material'

const PlacementScreen = () => {
  const [helpButton, setHelpButton] = useState(null)
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  const handleDone = () => {
    navigate(1)
  }
  const handleLater = () => {
    navigate(1)
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
      sx={{ px: 3, py: 3 }}
    >
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
      <Box component="img" src="empty" alt="*insert GIF here*" />

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

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, TextField, Button } from '@mui/material'

const STORAGE_KEY = 'userName'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE_KEY)
    if (savedValue) {
      setName(savedValue)
    }
  }, [])

  const handleNextClick = () => {
    localStorage.setItem(STORAGE_KEY, name)
    navigate('/method')
  }

  const handleOnChange = (event) => {
    const cleanedName = event.target.value.trim()
    setName(cleanedName)
  }

  return (
    <Stack
      flexGrow={1}
      flexShrink={1}
      flexBasis="auto"
      justifyContent="center"
      alignItems="center"
      p={2}
    >

      <Stack spacing={3} alignItems="center">
        <Typography variant="h2">Willkommen!</Typography>

        <Typography textAlign="center">
          Unser Notfall-Button hilft dir dabei in Momenten des Rauchverlangens diese zu unterdrücken
        </Typography>

        <Typography>Wie dürfen wir dich nennen?</Typography>

        {!name && (
          <Typography color="red">Bitte gib deinen Namen ein, um fortzufahren.</Typography>
        )}

        <TextField value={name} onChange={handleOnChange} label="Name" variant="outlined" />

        <Button variant="contained" disabled={!name} onClick={handleNextClick}>Weiter</Button>
      </Stack>
    </Stack>
  )
}

export default WelcomeScreen

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

      <Stack alignItems="center">
        <Typography variant="h3" marginBottom={2}>Willkommen!</Typography>
        <Typography textAlign="center" marginBottom={4}>
          Unser Notfall-Button hilft dir dabei in Momenten des Rauchverlangens diese zu unterdrücken
        </Typography>

        <Stack alignItems="center">
          <Typography>Wie dürfen wir dich nennen?</Typography>
          <Typography>Bitte gib deinen Namen ein, um fortzufahren.</Typography>
        </Stack>

        <TextField sx={{ marginTop: '24px' }} value={name} onChange={handleOnChange} label="Name*" variant="outlined" />
        <Button sx={{ marginTop: '24px' }} variant="contained" disabled={!name} onClick={handleNextClick}>Weiter</Button>
      </Stack>
    </Stack>
  )
}

export default WelcomeScreen

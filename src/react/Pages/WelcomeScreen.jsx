import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

const STORAGE_KEY = 'userName'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleNextClick = () => {
    if (!name) {
      return
    }

    localStorage.setItem(STORAGE_KEY, name)
    navigate('/method')
  }

  const handleOnChange = (event) => {
    const cleanedName = event.target.value.trim()
    setName(cleanedName)
  }

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center" padding={2}>

      <Stack spacing={3} alignItems="center">
        <h2>Willkommen!</h2>

        <p style={{ textAlign: 'center' }}>
          Unser Notfall-Button hilft dir dabei in Momenten des Rauchverlangens diese zu unterdrücken
        </p>

        <p>Wie dürfen wir dich nennen?</p>

        {!name && (
          <p>Bitte gib deinen Namen ein, um fortzufahren.</p>
        )}

        <input value={name} onChange={handleOnChange} placeholder="Name" />

        <button type="button" disabled={!name} onClick={handleNextClick}>Weiter</button>
      </Stack>
    </Stack>
  )
}

export default WelcomeScreen

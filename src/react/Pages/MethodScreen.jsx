import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

const STORAGE_KEY = 'selectedMethod'

const MethodScreen = () => {
  const navigate = useNavigate()

  const [selectedMethod, setSelectedMethod] = useState('')

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE_KEY)
    if (savedValue) {
      setSelectedMethod(savedValue)
    }
  }, [])

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value)
    localStorage.setItem(STORAGE_KEY, event.target.value)
  }

  return (
    <Stack flex="1 1 auto" justifyContent="space-between" padding={2}>

      <Stack alignItems="flex-start" marginTop={2} marginLeft={2}>
        <button type="button" onClick={() => navigate(-1)}>Zurück</button>
      </Stack>

      <Stack spacing={2}>
        <p>Mit welcher Methode können wir dich am besten unterstützen?</p>
      </Stack>

      <Stack spacing={1}>
        <label htmlFor="method-game">
          <input type="radio" id="method-game" name="method" value="game" checked={selectedMethod === 'game'} onChange={handleRadioChange} />
          Methode: Spiel, z.B. Tetris
        </label>

        <label htmlFor="method-facts">
          <input type="radio" id="method-facts" name="method" value="facts" checked={selectedMethod === 'facts'} onChange={handleRadioChange} />
          Methode: Fakten über Craving und Vorteile des Durchhaltens
        </label>

        <label htmlFor="method-breathing">
          <input type="radio" id="method-breathing" name="method" value="breathing" checked={selectedMethod === 'breathing'} onChange={handleRadioChange} />
          Methode: Atem-/Dehnübung
        </label>
      </Stack>

      <Stack alignItems="center">
        <button type="button" onClick={() => navigate('/idk')}>Weiter</button>
      </Stack>

    </Stack>
  )
}

export default MethodScreen

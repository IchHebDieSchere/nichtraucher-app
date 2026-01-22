import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Stack,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material'

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
    <Stack flexGrow={1} justifyContent="space-between" p={2}>
      <Stack alignItems="flex-start" marginTop={2} marginLeft={2}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Zurück
        </Button>
      </Stack>

      <FormControl>
        <FormLabel sx={{ mb: 5 }}>
          Mit welcher Methode können wir dich am besten unterstützen?
        </FormLabel>
        <RadioGroup value={selectedMethod} onChange={handleRadioChange}>
          <FormControlLabel
            value="game"
            control={<Radio />}
            label="Methode: Spiel, z.B. Tetris"
          />
          <FormControlLabel
            value="facts"
            control={<Radio />}
            label="Methode: Fakten über Craving und Vorteile des Durchhaltens"
          />
          <FormControlLabel
            value="breathing"
            control={<Radio />}
            label="Methode: Atem-/Dehnübung"
          />
        </RadioGroup>
      </FormControl>

      <Stack alignItems="center">
        <Button variant="contained" onClick={() => navigate('/idk')}>
          Weiter
        </Button>
      </Stack>
    </Stack>
  )
}

export default MethodScreen

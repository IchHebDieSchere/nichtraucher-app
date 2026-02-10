import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

  const { mood } = useParams()

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

  const onClickHandle = () => {
    let nextRoute = '/placement'

    if (mood === 'bad') {
      if (selectedMethod === 'game') {
        nextRoute = '/minigame'
      } else if (selectedMethod === 'facts') {
        nextRoute = '/facts'
      } else if (selectedMethod === 'breathing') {
        nextRoute = '/boxBreathing'
      }
    }

    if (mood === 'ok') {
      nextRoute = '/menu'
    }

    navigate(nextRoute)
  }

  return (
    <Stack justifyContent="space-between" p={2}>
      <FormControl>
        <FormLabel sx={{ mb: 2, textAlign: 'center' }}>
          How would you like us to support you?
        </FormLabel>
        <RadioGroup
          sx={{ margin: '0 16px ' }}
          value={selectedMethod}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="game"
            control={<Radio />}
            label="Play a game (e.g., Tetris)"
          />
          <FormControlLabel
            value="facts"
            control={<Radio />}
            label="Learn about cravings and the benefits of staying smoke-free"
          />
          <FormControlLabel
            value="breathing"
            control={<Radio />}
            label="Try a breathing or stretching exercise"
          />
        </RadioGroup>
      </FormControl>

      <Stack direction="row" justifyContent="flex-end" spacing={2} marginTop={3}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button disabled={!selectedMethod} variant="contained" onClick={onClickHandle}>
          Continue
        </Button>
      </Stack>
    </Stack>
  )
}

export default MethodScreen

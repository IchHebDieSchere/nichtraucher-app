import React from 'react'

import { Stack, Box, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useNavigate } from 'react-router'

//typography caption
//flackern geht auch weg
//button behalten
//toggle anstelle von radio button

const Methods = ({ selectedMethod, setSelectedMethod }) => {
  const routeTo = useNavigate()

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value)
  }

  return (
    <Stack alignItems="center" justifyContent="center" spacing={1}>
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        <RadioGroup
          name="method"
          value={selectedMethod}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="game" control={<Radio />} label="Tetris" />
          <FormControlLabel value="breathing" control={<Radio />} label="Breathing Exercise" />
          <FormControlLabel value="facts" control={<Radio />} label="Facts and Advantages" />
        </RadioGroup>
      </Box>

      <Button
        variant="contained"
        onClick={() => routeTo('/placement')}
        sx={{ bgcolor: '#989595', zIndex: 100 }}
      >
        Widget
      </Button>

      <Button
        variant="contained"
        onClick={() => routeTo('/boxBreathing')}
        sx={{ bgcolor: '#fc0303', color: '#fff', zIndex: 99 }}
      >
        Emergency
      </Button>
    </Stack>
  )
}

export default Methods

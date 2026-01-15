import React from 'react'

import { Stack, Box, Button, FormControlLabel, FormGroup, Checkbox } from '@mui/material'

const Methods = () => {
  const isWidgetAdded = false

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: 3,
          border: '1px solid',
          p: 1
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Minigame" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Atemübung" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Fakten & Vorteile" />
        </FormGroup>
      </Box>
      {!isWidgetAdded && (
        <Button
          variant="contained"
          sx={{
            bgcolor: '#989595',
            zIndex: 100
          }}
        >
          Widget
        </Button>
      )}

      <Button
        variant="contained"
        sx={{
          bgcolor: '#fc0303',
          color: 'fff',
          zIndex: 99
        }}
      >
        Notfall
      </Button>
    </Stack>
  )
}

export default Methods

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

import { Stack, Avatar, Box } from '@mui/material'

import { useNavigate } from 'react-router-dom'

const HomescreenWidget = () => {
  const [isPressed, setIsPressed] = useState(false)
  const [isGlow, setIsGlow] = useState(false)
  const navigate = useNavigate()

  return (
    <Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '166px',
          backgroundColor: '#80808080', // Transparent Gray
          borderRadius: (theme) => theme.shape.borderRadius,
          position: 'relative'
        }}
      >
        <Avatar
          sx={{
            width: '150px',
            height: '150px',
            fontSize: '40px',
            backgroundColor: 'black',
            transform: 'rotateX(45deg)',
            boxShadow: isGlow ? '0 0 10px 5px red' : ''
          }}
        />
        <Avatar
          onMouseUp={() => {
            setTimeout(() => {
              setIsPressed(true)
            }, 100)
            setTimeout(() => {
              setIsPressed(false)
            }, 300)
            setTimeout(() => {
              navigate('/')
            }, 500)
          }}
          sx={{
            width: '150px',
            height: '150px',
            fontSize: '40px',
            transform: 'rotateX(45deg)',
            backgroundColor: 'red',
            marginTop: isPressed ? '-150px' : '-160px'
          }}
        >
          HELP
        </Avatar>
        <Box
          sx={{
            width: '20px',
            height: '20px',
            backgroundColor: isGlow ? 'orange' : '',
            marginTop: '-125px',
            marginRight: '-125px',
            position: 'absolute',
            borderRadius: '50%'
          }}
        />
      </Stack>
      <label>
        <input
          type="checkbox"
          checked={isGlow}
          onChange={(e) => setIsGlow(e.target.checked)}
        />
        Glow Mode!
      </label>
    </Stack>
  )
}

export default HomescreenWidget

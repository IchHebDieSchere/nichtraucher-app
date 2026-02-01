/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

import { Stack, Avatar, Box } from '@mui/material'

import { keyframes } from '@mui/system'

import { useNavigate } from 'react-router-dom'

const buttonPress = keyframes`
  0% { transform: translateY(0px) rotateX(45deg); }
  30% { transform: translateY(0px) rotateX(45deg); }
  60% { transform: translateY(10px) rotateX(45deg); }
  80% { transform: translateY(-10px) rotateX(45deg); }
  100% { transform: translateY(0px) rotateX(45deg); }
`

const HomeScreenWidget = () => {
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
            console.log('Button clicked!')
            setTimeout(() => {
              setIsPressed(true)
              console.log('isPressed set to true')
            }, 100)
            setTimeout(() => {
              setIsPressed(false)
            }, 1000)
            setTimeout(() => {
              navigate('/splashscreen')
            }, 1000)
          }}
          sx={{
            width: '150px',
            height: '150px',
            fontSize: '40px',
            transform: 'rotateX(45deg)',
            backgroundColor: 'red',
            marginTop: '-160px',
            animation: isPressed ? `${buttonPress} 0.6s` : 'none'
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

export default HomeScreenWidget

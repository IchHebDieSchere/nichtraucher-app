import React from 'react'

import { Stack, Avatar, Typography } from '@mui/material'

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple']

// eslint-disable-next-line react/prop-types
const HomeScreenButton = ({ label = '!missing' }) => (
  <Stack justifyContent="center" alignItems="center">
    <Avatar sx={{ bgcolor: color[Math.floor(Math.random() * color.length)] }}>
      {label[0]}
    </Avatar>
    <Typography>{label}</Typography>
  </Stack>
)

export default HomeScreenButton

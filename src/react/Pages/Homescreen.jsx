import React from 'react'

import { Stack, Grid2 } from '@mui/material'

import HomeScreenButton from '../Components/HomeScreenButton'
import HomeScreenWidget from '../Components/HomeScreenWidget'

const HomeScreen = () => (
  <Stack
    sx={{
      height: '100%',
      backgroundColor: 'lightgray'
    }}
  >
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        backgroundColor: 'black',
        height: '50px'
      }}
    />
    <Grid2
      container
      columns={4}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={4}
      sx={{ marginTop: 4, paddingX: 4 }}
    >
      <Grid2 size={1}>
        <HomeScreenButton label="Message" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Camera" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Gallery" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Maps" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Calendar" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Setting" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Weather" />
      </Grid2>
      <Grid2 size={1}>
        <HomeScreenButton label="Music" />
      </Grid2>
      <Grid2 size={2}>
        <HomeScreenWidget />
      </Grid2>
    </Grid2>
    <Stack />
    <Stack
      justifyContent="flex-end"
      alignItems="flex-end"
      sx={{
        backgroundColor: 'black',
        height: '50px',
        marginTop: 'auto'
      }}
    />
  </Stack>
)

export default HomeScreen

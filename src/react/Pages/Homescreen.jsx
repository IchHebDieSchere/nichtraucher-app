import React from 'react'

import { Stack, Grid2 } from '@mui/material'

import HomescreenButton from '../Components/HomescreenButton'
import HomescreenWidget from '../Components/HomescreenWidget'

const Homescreen = () => (
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
        <HomescreenButton label="Message" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Camera" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Gallery" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Maps" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Calendar" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Setting" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Weather" />
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Music" />
      </Grid2>
      <Grid2 size={2}>
        <HomescreenWidget />
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

export default Homescreen

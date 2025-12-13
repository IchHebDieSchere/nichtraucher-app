import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Typography, Container, Paper } from '@mui/material'
import AppLogo from '../../assets/favicon.svg'

const borderRadius = 6

const ScreenLayout = ({ children }) => (
  <Stack
    direction="row"
    justifyContent="center"
    sx={{
      width: '100%',
      height: '100%',
      paddingTop: theme => theme.spacing(5),
      paddingBottom: theme => theme.spacing(5)
    }}
  >
    <Container
      maxWidth="xs"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        <img
          src={AppLogo}
          alt="App Logo"
          style={{
            width: '40px',
            height: '40px'
          }}
        />
        <Typography variant="h5">
          My Mobile Health App
        </Typography>
      </Stack>
      <Paper
        elevation={6}
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 2,
          paddingRight: 1,
          paddingBottom: 2,
          paddingLeft: 1,
          overflow: 'hidden',
          borderRadius: theme => theme.spacing(borderRadius),
          background: theme => theme.palette.grey[900]
        }}
      >
        <Stack
          flex="1 1 auto"
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.background.paper
          }}
        >
          {children}
        </Stack>
      </Paper>
    </Container>
  </Stack>
)

ScreenLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ScreenLayout

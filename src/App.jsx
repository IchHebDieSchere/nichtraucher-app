import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import AppRoutes from './AppRoutes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4'
    },
    secondary: {
      main: '#625B71'
    },
    error: {
      main: '#B3261E'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.1px',
      lineHeight: 1.43
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: defaultTheme => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          background: defaultTheme.palette.grey[200]
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
  }
})

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppRoutes />
    </Router>
  </ThemeProvider>
)
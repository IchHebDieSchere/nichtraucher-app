// Import
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// Import fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Import AppRoutes.jsx
import AppRoutes from './AppRoutes'

// createTheme?
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

// create Container
const container = document.getElementById('app')

// create Root
const root = createRoot(container)

// handler
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppRoutes />
    </Router>
  </ThemeProvider>
)
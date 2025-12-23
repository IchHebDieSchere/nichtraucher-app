import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const ScrollContainer = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: 2,
      '&::-webkit-scrollbar': {
        width: '8px'
      },
      '&::-webkit-scrollbar-track': {
        background: (theme) => theme.palette.grey[200],
        borderRadius: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: (theme) => theme.palette.primary.main,
        borderRadius: '4px',
        '&:hover': {
          background: (theme) => theme.palette.primary.dark
        }
      }
    }}
  >
    {children}
  </Box>
)

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ScrollContainer
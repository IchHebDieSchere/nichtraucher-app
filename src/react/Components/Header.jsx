import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Header = ({ children, variant, align }) => (
  <Typography
    variant={variant}
    align={align}
    sx={{
      marginY: 2,
      fontWeight: 'bold'
    }}
  >
    {children}
  </Typography>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

Header.defaultProps = {
  variant: 'h4',
  align: 'left'
}

export default Header
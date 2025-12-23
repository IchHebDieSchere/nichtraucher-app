import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@mui/material'

const Button = ({ children, variant, onClick, disabled, fullWidth, color }) => (
  <MuiButton
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    fullWidth={fullWidth}
    color={color}
    sx={{
      textTransform: 'none',
      borderRadius: 10,      // M3 cornerLarge (fully rounded pills)
      paddingY: 1.25,        // M3 spacing
      paddingX: 3,
      fontWeight: 500,       // M3 medium weight
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 1
      }
    }}
  >
    {children}
  </MuiButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success'])
}

Button.defaultProps = {
  variant: 'contained',
  onClick: () => {},
  disabled: false,
  fullWidth: false,
  color: 'primary'
}

export default Button

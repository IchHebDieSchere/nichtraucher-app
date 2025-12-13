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
      borderRadius: 2,
      paddingY: 1.5,
      paddingX: 3
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

import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

const Input = ({ 
  label, 
  value, 
  onChange, 
  type, 
  placeholder, 
  disabled, 
  fullWidth,
  error,
  helperText 
}) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    fullWidth={fullWidth}
    error={error}
    helperText={helperText}
    variant="outlined"
    sx={{
      marginY: 1,
      '& .MuiOutlinedInput-root': {
        borderRadius: 2.5
      }
    }}
  />
)

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string
}

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  fullWidth: true,
  error: false,
  helperText: ''
}

export default Input

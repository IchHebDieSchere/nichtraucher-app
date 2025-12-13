import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Text = ({ children, variant, align, color }) => (
  <Typography
    variant={variant}
    align={align}
    color={color}
    sx={{
      marginY: 0.5
    }}
  >
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['body1', 'body2', 'caption', 'subtitle1', 'subtitle2']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.string
}

Text.defaultProps = {
  variant: 'body1',
  align: 'left',
  color: 'inherit'
}

export default Text
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const Spacer = ({ size }) => (
  <Box sx={{ height: size * 8 }} />
)

Spacer.propTypes = {
  size: PropTypes.number
}

Spacer.defaultProps = {
  size: 2
}

export default Spacer
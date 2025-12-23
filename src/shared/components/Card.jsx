import React from 'react'
import PropTypes from 'prop-types'
import { Card as MuiCard, CardContent, CardHeader } from '@mui/material'

const Card = ({ children, title, elevation }) => (
  <MuiCard
    elevation={elevation}
    sx={{
      borderRadius: 3,
      marginY: 2
    }}
  >
    {title && <CardHeader title={title} />}
    <CardContent>
      {children}
    </CardContent>
  </MuiCard>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  elevation: PropTypes.number
}

Card.defaultProps = {
  title: '',
  elevation: 2
}

export default Card

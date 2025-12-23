import React from 'react'
import PropTypes from 'prop-types'
import { List as MuiList } from '@mui/material'

const List = ({ children }) => (
  <MuiList sx={{ width: '100%' }}>
    {children}
  </MuiList>
)

List.propTypes = {
  children: PropTypes.node.isRequired
}

export default List
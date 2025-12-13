import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as MuiListItem, ListItemText } from '@mui/material'

const ListItem = ({ primary, secondary, onClick }) => (
  <MuiListItem 
    button={!!onClick}
    onClick={onClick}
    sx={{
      borderRadius: 1,
      marginY: 0.5
    }}
  >
    <ListItemText 
      primary={primary} 
      secondary={secondary}
    />
  </MuiListItem>
)

ListItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  onClick: PropTypes.func
}

ListItem.defaultProps = {
  secondary: '',
  onClick: null
}

export default ListItem
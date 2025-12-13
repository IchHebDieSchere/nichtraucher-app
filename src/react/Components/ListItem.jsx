import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as MuiListItem, ListItemText } from '@mui/material'

const ListItem = ({ primary, secondary, onClick }) => (
  <MuiListItem 
    button={!!onClick}
    onClick={onClick}
    sx={{
      borderRadius: 2,
      marginY: 0.5,
      paddingY: 1.5,
      '&:hover': {
        backgroundColor: 'rgba(103, 80, 164, 0.08)'
      }
    }}
  >
    <ListItemText 
      primary={primary} 
      secondary={secondary}
      primaryTypographyProps={{
        fontWeight: 500,
        letterSpacing: '0.1px'
      }}
      secondaryTypographyProps={{
        letterSpacing: '0.25px'
      }}
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

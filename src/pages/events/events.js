import React from 'react'
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material'

// Application Component || Define Exports
// ===============================================================================================
// ===============================================================================================
const EventsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Community Clean-Up" secondary="Sept 22, 2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Food Drive" secondary="Oct 15, 2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tree Planting" secondary="Nov 2, 2024" />
        </ListItem>
      </List>
    </Container>
  )
}

export default EventsPage

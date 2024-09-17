import React from 'react'
import { Button, Container, Typography } from '@mui/material'

// Application Component || Define Exports
// ===============================================================================================
// ===============================================================================================
const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Community Connect
      </Typography>
      <Typography variant="body1" paragraph>
        Connecting volunteers with local community events.
      </Typography>
      <Button variant="contained" color="primary" href="/events">
        Find Opportunities
      </Button>
      <Button variant="contained" color="secondary" href="/create-event" style={{ marginLeft: '10px' }}>
        Create an Event
      </Button>
    </Container>
  )
}

export default HomePage

import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'

// Application Component || Define Exports
// ===============================================================================================
// ===============================================================================================
const CreateEventPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create an Event
      </Typography>
      <TextField fullWidth label="Event Title" margin="normal" />
      <TextField fullWidth label="Event Description" margin="normal" multiline rows={4} />
      <TextField fullWidth label="Date" type="date" margin="normal" InputLabelProps={{ shrink: true }} />
      <TextField fullWidth label="Location" margin="normal" />
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Submit Event
      </Button>
    </Container>
  )
}

export default CreateEventPage

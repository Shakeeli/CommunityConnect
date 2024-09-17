import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'

// Application Component || Define Exports
// ===============================================================================================
// ===============================================================================================
const SignUpPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Register
      </Button>
    </Container>
  )
}

export default SignUpPage

import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

// Application Component || Define Exports
// ===============================================================================================
// ===============================================================================================
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Community Connect
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/events">
          Events
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to="/create-event">
          Create Event
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

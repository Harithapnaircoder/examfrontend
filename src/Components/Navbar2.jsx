import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { HashLink as RouterLink } from 'react-router-hash-link'; // Use HashLink for smooth scrolling

const NavLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '1rem',
  padding: theme.spacing(1, 2), // Adjust padding
  textDecoration: 'none',
  border: '1px solid transparent', // Add a small border
  transition: 'border-color 0.3s ease-in-out', // Add transition for smooth hover effect

  '&:hover': {
    textDecoration: 'underline',
    borderColor: 'white', // Change border color on hover
  },
}));

export default function Navbar2() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', position: 'fixed', zIndex: '100', top: 0 }}>
      <AppBar position="static">
        <Toolbar sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavLink component={RouterLink} to="/feedback" style={{ textDecoration: 'none', color: 'inherit' }}>
                Course Feedback App
              </NavLink>
              <NavLink component={RouterLink} to="/courseadd" style={{ textDecoration: 'none', color: 'inherit' }}>
                Add Course
              </NavLink>
              <NavLink component={RouterLink} to="/managecourse" style={{ textDecoration: 'none', color: 'inherit' }}>
                Manage Courses
              </NavLink>
              <NavLink component={RouterLink} to="/course" style={{ textDecoration: 'none', color: 'inherit' }}>
              Courses
              </NavLink>
              <NavLink component={RouterLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Logout
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

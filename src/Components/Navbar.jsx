import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HashLink as RouterLink } from 'react-router-hash-link';

const NavLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '1rem',
  padding: theme.spacing(1),
  textDecoration: 'none',
  border: '1px solid transparent',
  transition: 'border-color 0.3s ease-in-out',

  '&:hover': {
    textDecoration: 'underline',
    borderColor: 'white',
  },
}));

const Navbar = () => {
  return (
    <>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <AppBar position="static" sx={{ bgcolor: 'primary' }}>
          <Toolbar sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              {/* <NavLink component={RouterLink} to="/#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </NavLink> */}
              <NavLink component={RouterLink} to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                Login
              </NavLink>
              <NavLink component={RouterLink} to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                Signup
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ paddingTop: '64px' }}>
      
      </Box>
    </>
  );
};

export default Navbar;

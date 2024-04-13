import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      textAlign: 'center', 
      backgroundColor: theme.palette.success.main 
    }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} All rights reserved. 
        Contact us www.example@gmail.com
      </Typography>
    </div>
  );
};

export default Footer;

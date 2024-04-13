import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar2 from './Navbar2'; 
import FeedbackTable from './FeedbackTable'; // Import the FeedbackTable component

const theme = createTheme();

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/feedback');
      if (response.ok) {
        const data = await response.json();
        setFeedback(data);
      } else {
        console.error('Failed to fetch feedback:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Box mt={8}>
            {/* Display feedback details in a table */}
            <Typography variant="h5" align="center" gutterBottom>
              Feedback Details
            </Typography>
            <FeedbackTable feedback={feedback} />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Feedback;

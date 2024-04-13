import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar2 from './Navbar2';

const theme = createTheme();

const CourseAdd = () => {
  const [formData, setFormData] = useState({
    courseId: '',
    courseName: '',
    organizationalUnit: '',
    trainingType: '',
    startDate: '',
    endDate: '',
    batchCount: '',
    trainerName: '',
    status: '',
    feedback: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/courses/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Course added successfully!');
        setOpenSnackbar(true);
        setFormData({
          courseId: '',
          courseName: '',
          organizationalUnit: '',
          trainingType: '',
          startDate: '',
          endDate: '',
          batchCount: '',
          trainerName: '',
          status: '',
          feedback: '',
        });
      } else {
        console.error('Adding course failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during course addition:', error);
    }
  };

  return (
    <div>
<Navbar2 />
   
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box mt={8}>
          <Typography variant="h4" align="center" gutterBottom>
            Add Course
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="courseId"
                  label="Course ID"
                  value={formData.courseId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="courseName"
                  label="Course Name"
                  value={formData.courseName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  name="organizationalUnit"
                  label="Organizational Unit"
                  value={formData.organizationalUnit}
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                >
                  <option value="">Select OU</option>
                  <option value="Academic">Academic</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Retail">Retail</option>
                  <option value="Government">Government</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  name="trainingType"
                  label="Training Type"
                  value={formData.trainingType}
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                >
                  <option value="">Select Training Type</option>
                  <option value="LTT (6 months)">LTT (6 months)</option>
                  <option value="MDT (2 months)">MDT (2 months)</option>
                  <option value="Microskill (1 month)">Microskill (1 month)</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="startDate"
                  label="Start Date"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="endDate"
                  label="End Date"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="batchCount"
                  label="Batch Count"
                  type="number"
                  value={formData.batchCount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="trainerName"
                  label="Trainer Name"
                  value={formData.trainerName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="status"
                  label="Status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="feedback"
                  label="Feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div style={{ textAlign: 'center' }}>
      <Button type="submit" variant="contained" color="primary">
        Add Course
      </Button>
    </div>
          </form>
          <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
            <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
              Course added successfully!
            </MuiAlert>
          </Snackbar>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default CourseAdd;

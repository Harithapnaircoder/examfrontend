import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar2 from './Navbar2'; 

const theme = createTheme();

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8080/couses/courseadd');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch courses:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
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
            {/* Display course details in a table */}
            <Typography variant="h5" align="center" gutterBottom>
              Course Details
            </Typography>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: 'black', color: 'white' }}>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Organizational Unit</th>
                  <th>Training Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Batch Count</th>
                  <th>Trainer Name</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.courseId}>
                    <td>{course.courseId}</td>
                    <td>{course.courseName}</td>
                    <td>{course.organizationalUnit}</td>
                    <td>{course.trainingType}</td>
                    <td>{course.startDate}</td>
                    <td>{course.endDate}</td>
                    <td>{course.batchCount}</td>
                    <td>{course.trainerName}</td>
                    <td>{course.status}</td>
                    <td>{course.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Courses;

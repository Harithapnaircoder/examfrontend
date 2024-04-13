import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';
import CourseAdd from './Components/CourseAdd';
import Feedback from './Components/Feedback';
import ManageCouse from './Components/ManageCourse';
import Courses from './Components/Courses';
import Footer from './Components/Footer'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courseadd" element={<CourseAdd />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/managecourse" element={<ManageCouse />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;

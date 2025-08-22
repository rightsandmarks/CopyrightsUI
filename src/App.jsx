// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';  // replace with your actual home component
import Assignment from './pages/Assignment';
import About from './pages/About';
import Advantages from './pages/Advantages';
import ContactUs from './pages/ContactUs';
import InternationalRegistration from './pages/InternationalRegistration';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registration from './pages/Registration';
import MainRegistrationForm from './pages/MainRegistrationForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/internationalreg" element={<InternationalRegistration />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/registerMain" element={<MainRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './styles/main.scss';

import Nav from './components/composite/Nav.jsx';
import Footer from './components/composite/Footer.jsx';

import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/project1" element={<ProjectPage1 />} /> */}
        {/* <Route path="/project2" element={<ProjectPage2 />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

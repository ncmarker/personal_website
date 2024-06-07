import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './styles/main.scss';

import Nav from './components/composite/Nav.jsx';
import Footer from './components/composite/Footer.jsx';

import LandingPage from './pages/LandingPage.jsx';
import Pixel from './pages/Pixel.jsx';
import Ekko from './pages/Ekko.jsx';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pixel" element={<Pixel />} />
        <Route path="/ekko" element={<Ekko />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

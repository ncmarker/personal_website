import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import './styles/main.scss';

import Nav from './components/composite/Nav.jsx';
import Footer from './components/composite/Footer.jsx';

import TransitionWrapper from './components/transitions/TransitionWrapper.jsx';
import { NavigationProvider } from './components/transitions/NavigationContext.jsx';
import useIntersectionObserver from './components/transitions/IntersectionObserver.jsx';

import LandingPage from './pages/LandingPage.jsx';
import Pixel from './pages/Pixel.jsx';
import Ekko from './pages/Ekko.jsx';
import Desy from './pages/Desy.jsx';
import Spotify from './pages/Spotify.jsx';
import MyPassword from './pages/MyPassword.jsx';
import Blackjack from './pages/Blackjack.jsx';
import MockSearch from './pages/MockSearch.jsx';
import Snap from './pages/Snap.jsx';


function App() {
  useIntersectionObserver('#landing-content');

  return (
    <div>
      <NavigationProvider>
        <Nav />
        <TransitionWrapper>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pixel" element={<Pixel />} />
          <Route path="/ekko" element={<Ekko />} />
          <Route path="/desy" element={<Desy />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/myPassword" element={<MyPassword />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/mockSearch" element={<MockSearch />} />
          <Route path="/snap" element={<Snap />} />
        </TransitionWrapper>
        <Footer />
      </NavigationProvider>
    </div>
  );
}

export default App;

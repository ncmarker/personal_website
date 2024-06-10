import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // imports tailwind css
import App from './App';

import { HashRouter as Router } from 'react-router-dom';
// uncomment to add public URL to all image sources
// import { ImageProvider } from './context/ImageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <ImageProvider> */}
      <App />
    {/* </ImageProvider> */}
  </Router>
);

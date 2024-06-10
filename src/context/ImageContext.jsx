import React, { createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const location = useLocation();

  const updateImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.includes('http') && !src.includes(process.env.PUBLIC_URL)) {
        img.setAttribute('src', `${process.env.PUBLIC_URL}${src}`);
      }
    });
  };

  useEffect(() => {
    updateImages();
  }, [location]);

  return (
    <ImageContext.Provider value={{}}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };

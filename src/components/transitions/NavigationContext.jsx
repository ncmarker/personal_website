import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [direction, setDirection] = useState('forward');
  const [source, setSource] = useState('');

  const value = {
    direction,
    setDirection,
    source,
    setSource,
    resetSource: () => setSource(''),
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

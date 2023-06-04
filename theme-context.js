import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const theme = {
    nightModeBackground: ['#800080', '#000'],
    dayModeBackground: ['#89AFFF', '#000'],
    nightModeBorder: '#FFF',
    dayModeBorder: '#FFF',
    textColor: '#FFF' 
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
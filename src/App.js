 // import React, {useEffect, useState} from 'react';
import Header from './Header';
import ThemeContext from './ThemeContext';
import React from 'react';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {

  return (
    <ThemeContext.Provider value={buttonThemes} >
    <Header />
    </ThemeContext.Provider>
  );
}

export default App;

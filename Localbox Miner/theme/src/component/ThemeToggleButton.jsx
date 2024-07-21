import React, { useContext } from 'react';
import { themecontext } from '../context/Themecontex';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggleButton = () => {
  const { themeUpdaterFunction, theme } = useContext(themecontext);

  return (
    <button 
      className="theme-toggle-button" 
      onClick={themeUpdaterFunction}
      style={{
        backgroundColor: theme === 'light' ? 'black' : 'white',
        color: theme === 'light' ? 'white' : 'black',
        border: 'none',
        padding: '0.5rem',
        borderRadius: '50%',
        cursor: 'pointer'
      }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

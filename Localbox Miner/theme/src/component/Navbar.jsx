import React, { useContext } from 'react';
import { themecontext } from '../context/Themecontex';

const Navbar = () => {
  const { theme } = useContext(themecontext);
  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      padding: '1rem'
    }}>
      <h1>Navbar</h1>
      <h3>The Theme is {theme}</h3>
    </div>
  );
};

export default Navbar;

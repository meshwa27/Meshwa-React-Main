import React from 'react';
import Navbar from './component/Navbar';
import Midsection from './component/Midsection';
import { ThemeToggleButton } from './component/ThemeToggleButton';
import './App.css';
import { ThemecontextProviderfunction } from './context/Themecontex';

const App = () => {
  return (
    <ThemecontextProviderfunction>
      <div className="app-container">
        <Navbar />
        <Midsection />
        <div>
          <ThemeToggleButton />
        </div>
      </div>
    </ThemecontextProviderfunction>
  );
};

export default App;

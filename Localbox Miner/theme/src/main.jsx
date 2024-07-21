import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemecontextProviderfunction } from './context/Themecontex';

ReactDOM.render(
  <ThemecontextProviderfunction>
    <App />
  </ThemecontextProviderfunction>,
  document.getElementById('root')
);

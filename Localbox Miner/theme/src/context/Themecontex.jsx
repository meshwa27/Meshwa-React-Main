import { createContext, useState } from 'react';

export const themecontext = createContext();

export function ThemecontextProviderfunction({ children }) {
  const [theme, setTheme] = useState('light');

  const themeUpdaterFunction = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themecontext.Provider value={{ theme, themeUpdaterFunction }}>
      {children}
    </themecontext.Provider>
  );
}

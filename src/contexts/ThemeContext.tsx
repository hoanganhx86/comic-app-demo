import React from 'react';
import {type Theme, theme as defaultTheme} from '../styles';

interface ProvidedValue {
  theme: Theme;
}

interface ThemeProviderProps {
  initial: Theme;
  children?: React.ReactNode;
}

export const ThemeContext = React.createContext<ProvidedValue>({
  theme: defaultTheme,
});

export const ThemeProvider = React.memo<ThemeProviderProps>(props => {
  const [theme] = React.useState<Theme>(props.initial);

  return (
    <ThemeContext.Provider value={{theme}}>
      {props.children}
    </ThemeContext.Provider>
  );
});

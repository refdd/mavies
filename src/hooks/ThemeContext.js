import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to use the context
export function useTheme() {
  return useContext(ThemeContext);
}

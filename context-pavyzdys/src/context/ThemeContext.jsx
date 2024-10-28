import { createContext, useState } from "react";

// 1. Sukuriamas contextas
const ThemeContext = createContext();

// 2. Sukuriamas provider komponentas
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 3. Paduodam reiksmes
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

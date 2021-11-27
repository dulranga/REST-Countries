import React, { FC, useContext, useEffect, useState } from "react";

interface Theme {
  theme: "light" | "dark";
  toggleTheme?: () => void;
}
export const ThemeContext = React.createContext<Theme>({ theme: "light" });

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme["theme"]>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

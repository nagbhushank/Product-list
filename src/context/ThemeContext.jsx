import { createContext, useContext, useState } from "react";
import { DARK_THEME, WHITE_THEME } from "../utils/Constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(WHITE_THEME);

    const updateTheme = () => {
        setTheme(theme === WHITE_THEME ? DARK_THEME : WHITE_THEME);
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

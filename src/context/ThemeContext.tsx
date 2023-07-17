import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () => void;
}>({
    theme: "light", toggleTheme: (): void => {
    }
});

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = (): void => {
        setTheme((prevTheme: string): string => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

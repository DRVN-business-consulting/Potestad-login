import React from 'react';

const themes = ['light', 'dark'];

const ThemeContext = React.createContext(themes[0]);

// const ThemeContext = React.createContext('light');

const ThemeContextProvider =  ({children}) => {
    const [theme, setTheme] = React.useState(themes[0]);
    // const [theme, setTheme] = React.useState('light');


    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return React.useContext(ThemeContext);
}

export default ThemeContextProvider;
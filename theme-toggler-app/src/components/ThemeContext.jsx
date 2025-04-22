import React from 'react'
import { createContext, useReducer } from 'react'

export const ThemeCont = createContext();

const ThemeContext = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'TOGGLE_THEME':
                const newtheme =  state === 'light' ? 'dark' : 'light'; // toggle between light and dark theme 
                localStorage.setItem("theme", newtheme); // set the theme in local storage
                return newtheme; // return the new theme
            default:
                return state;
        }
    }
    const initialTheme = localStorage.getItem("theme") || "light";
    const [state, setReducer] = useReducer(reducer, initialTheme); // default value is light
    return (

        <ThemeCont.Provider value={{ state, setReducer }}>
            {children}
        </ThemeCont.Provider>
    )
}

export default ThemeContext
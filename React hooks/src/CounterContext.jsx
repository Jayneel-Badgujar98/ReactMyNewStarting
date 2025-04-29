// ThemeContext.jsx
// import { createContext , useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({children }) => {

//     const [theme , setTheme] = useState("light");

//     const toggleTheme = () => {
//         setTheme(theme === "light" ? "dark" : "light");
//     }

//     return (
//         <ThemeContext.Provider value = {{toggleTheme, theme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// import { createContext, useState } from "react";

// export const CounterContext = createContext();

// export const CounterProvider = ({ children }) => {

//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount((oldCount) => (oldCount + 1));
//     }

//     const decrement = () => {
//         setCount((oldCount) => (oldCount - 1));
//     }
//     const reset = () => {
//         setCount(0);
//     }
//     const doubleIncrement = () => {
//         setCount((oldCount) => (oldCount + 2));
//     }
//     return (
//         <CounterContext.Provider value={{ increment, decrement, count , reset , doubleIncrement}}>
//             {children}
//         </CounterContext.Provider>
//     )
// }


import { useState, createContext } from "react";

export const Context = createContext();
export default function ContextProvider({ children }) {

    const [count, setCount] = useState(0);

    return (
        <>
            <Context.Provider value={{ count,setCount }}>
                {children}
            </Context.Provider>
        </>
    )

}



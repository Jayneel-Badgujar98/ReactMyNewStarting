// // Home.jsx
// import React, { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';

// const Home = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     return (
//         <div style={{
//             backgroundColor: theme == "light" ? "white" : "black",
//             color: theme == "light" ? "black" : "white", padding: "20px"
//         }}>
//             <div>Current Theme: {theme}</div>
//             <button onClick={toggleTheme}>Toggle</button>
//         </div>
//     )

// }
// export default Home;

// import React, { useContext } from 'react';
// import { CounterContext } from './CounterContext';

// const Home = () => {
//     const { increment, decrement , count, reset, doubleIncrement} = useContext(CounterContext);
//     return (
//         <div>
//             <div>Current Count: {count}</div>
//             <button disabled = {count === 10 } onClick={increment}>Increment</button>
//             <button disabled = {count === 0} onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//             <button disabled = {count >= 10 || count === 9  } onClick={doubleIncrement}>Double Increment</button>
//         </div>
//     )

// }
// export default Home;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { About } from './About'


// function App() {

//   const [count, setCount] = useState(0)
//   function Click() {
//   setCount(count + 1);
//   }

//   return (
//     <>
//      <About />
// <button onClick={Click}>count is {count}</button>
//     </>
//   )
// }

// export default App


// function Button({ variant, size, children, ...props }) {
//   const variantStyles = { primary: "blue ", secondary: "gray", danger: "red" }

//   const sizeStyles = {
//     small: { padding: "5px 10px", fontSize: "14px" },
//     medium: { padding: "10px 15px", fontSize: "16px" },
//     large: { padding: "15px 20px", fontSize: "18px" }
//   };


//   const buttonStyle = {
//     backgroundColor: variantStyles[variant] || "gray",
//     color: "white",
//     ...sizeStyles[props.size],
//   }




//   return <button style={buttonStyle}{...props}>{children}</button>;
// }

// function App() {
//   return (
//     <div>
//       <Button variant="primary" size="large" onClick={() => alert("Clicked!")}>
//         Click Me
//       </Button>
//       <Button variant="danger" size="small" disabled>
//         Delete
//      </Button>

//     </div>
//   );
// }

// export default App;

// const Product = ({ courseName = "Unknown Course", duration = "4 weeks", topics = ["Basics"] }) => {
//   return (
//     <div>
//       <h1>{courseName}</h1>
//       <p>{duration}</p>
//       <ul>
//         {topics.map((course, index) => (
//           <li key={index}> - {course} </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const App = () => {
//   const Course = {
//     courseName: 'React Masterclass ',
//     duration: '8 weeks',
//     topics: [" JSX ",
//       " Components ",
//       " Hooks"
//       , "State Management"],
//   }
//   return (
//     <>
//       {/* <Product title = "shirt" description = "This is a nice shirt " price = {158.99} /> */}
//       <Product courseName={Course.courseName} duration={Course.duration} topics={Course.topics} />
//       <Product {...Course} />
//     </>
//   )
// }

// export default App;



// import React, { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(100);

//   return (
//     <>
//        <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           // alignItems: "center", // Ensures vertical centering if needed
//         }}
//       >
//         <h1 style={{ margin: 0 }}>Count : {count}</h1>
//       </div>
//       <button onClick={() => setCount(count + 5)}>Increment</button>
//       <button disabled={count == 0} onClick={() => setCount(count - 5)}>Decrement</button>
//     </>
//   )
// }

// export default App;

// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);
//   // const [timeUp, setTimeUp] = useState(false);
//   const [running, setRunning] = useState(true);


//   useEffect(() => {

//     if (!running) {
//       // clearInterval(interval);
//       // setTimeUp(true);
//       return;
//     }
//     const interval = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     // setTimeout(() => {
//     //   clearInterval(interval);
//     // }, 10000);

//     // Cleanup function (runs when component unmounts)
//     return () => clearInterval(interval);
//   }, [running, seconds]); // Empty dependency array means it runs only once (on mount)

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {/* {timeUp ? (
//         <h1>Time's up!</h1>
//       ) : (
//         <h1>Timer: {seconds} seconds</h1>
//       )
//       } */}
//       <h1>Timer: {seconds} seconds</h1>
//       <button onClick={() => { setSeconds(0)}}>Reset Timer</button>
//       <button onClick={() => { setRunning(true) }}>Play</button>
//       <button onClick={() => { setRunning(false) }}>Pause</button>

//     </div>
//   );
// };

// export default Timer;

// App.jsx
// import { CounterProvider } from "./CounterContext";
// import React from "react";
// import Home from "./Home";


// export default function App() {
//   return(
//  <CounterProvider>
//   <Home />
//  </CounterProvider>
//   )
// }

// import React, { useState } from "react";
// import Counter from "./Counter";

// export default function App() {
//   const [count, setCount] = useState(0);

//   console.log("App Rendered");

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Counter message = "Hello" count = {count}/>
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0); // useRef persists value across renders

//   renderCount.current += 1; // Updating ref won't trigger a re-render

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <h2>Component Rendered: {renderCount.current} times</h2>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null); // Store previous count

//   useEffect(() => {
//     prevCount.current = count; // Update previous count on every render
//   }, [count]);

//   return (
//     <div>
//       <h1>Current: {count}</h1>
//       <h2>Previous: {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from 'react'

// export default function App() {

//   const [time, setTime] = useState(0);

//   const interval = useRef(null);
//   const countRenders = useRef(0);

//   // Track the number of re-renders with the useRef hook
//   useEffect(() => {
//     countRenders.current += 1;
//   }, [time]);


//   const Start = () => {
//     if (!interval.current) {
//       interval.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000)
//     }
//   }

//   const Stop = () => {
//     clearInterval(interval.current);
//     interval.current = null;
//     // setTime(0);
//   }
//   return (
//     <div>
//       <h1>Timer : {time} seconds</h1>
//       <button onClick={Start}>Start</button>
//       <button onClick={Stop}>Stop</button>
//       <h2>Component Rendered: {countRenders.current} times</h2>
//       {/* <button onClick={() => setTime(0)}>Reset</button> */}
//     </div>
//   )
// }

// import { useState, useEffect, useRef } from 'react';

// export default function App() {
//   const [time, setTime] = useState(0);
//   const interval = useRef(null);
//   const renderCount = useRef(0);
//   const timeRef = useRef(0); // Stores time without causing re-renders

//   // Track re-renders
//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   const Start = () => {
//     if (!interval.current) {
//       interval.current = setInterval(() => {
//         timeRef.current += 1; // Updates time without re-rendering
//         setTime(timeRef.current); // Updates UI
//       }, 1000);
//     }
//   };

//   const Stop = () => {
//     clearInterval(interval.current);
//     interval.current = null;
//   };

//   return (
//     <div>
//       <h1>Timer: {time} seconds</h1>
//       <button onClick={Start}>Start</button>
//       <button onClick={Stop}>Stop</button>
//       <h2>Component Rendered: {renderCount.current} times</h2>
//     </div>
//   );
// }

// import { useRef, useState } from 'react'

// const App = () => {

//   const [isFFocus, setFFocus] = useState(true);

//   const firstRef = useRef(null);
//   const secondRef = useRef(null);
//   const ThirdRef = useRef(null);

//   const handleClick = () => {
//     if (isFFocus) {
//       secondRef.current.focus();
//     }
//     else if (!isFFocus) {
//       firstRef.current.focus();
//     }
//     setFFocus(!isFFocus);
//   }



//   return (
//     <div>
//       <input ref={firstRef} type="text" placeholder="First  Input " />
//       <input ref={secondRef} type="text" placeholder="Second Input " />
//       <input ref={ThirdRef} type="text" placeholder="Third  Input " />
//       <button onClick={handleClick}>Switch Button</button>
//     </div>
//   )
// }
// export default App;
// import { useRef, useState , useEffect} from 'react'

// export default function App() {
//   const [count, setCount] = useState(0);
//   const prevRef = useRef("N/A");

//   useEffect(() => {
//     prevRef.current = count;
//   }, [count])

//   return (
//     <div>
//       <div>Current Count :- {count}</div>
//       <div>Previous Count :- {prevRef.current}</div>
//       <button onClick={() => { setCount(count + 1) }}   >Increment</button>
//     </div>
//   )

// }

// import { useReducer } from "react";

// const changefunc = (state, action) => {

//   if (action.type === "increment") {
//     return { count: state.count + 1 }
//   }
//   else if (action.type === "decrement") {
//     return { count: state.count - 1 }
//   }
//   else if (action.type === "reset") {
//     return { count: 0 }
//   }
//   else if (action.type === "doubleIncrement") {
//     return { count: state.count + 2 }
//   }
//   else {
//     return state;
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(changefunc, { count: 0 });
//   return (
//     <div>
//       <div>Count : {state.count}</div>
//       <button onClick={() => { dispatch({ type: "increment" }) }}> Increment</button>
//       <button disabled={state.count === 0} onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
//       <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>
//       <button onClick={() => { dispatch({ type: "doubleIncrement" }) }}>Double Increment</button>
//     </div>
//   )
// }

// import { useReducer } from "react";

// const initialState = {
//   items: [],
//   totalprice : 0,
// }





// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":

//     return {
//       ...state,
//       items : [...state.items, action.items],
//       totalprice : state.totalprice + action.payload.price,
//     }

//     case "REMOVE_ITEM":
//       return state.filter(item => item.id !== action.payload.id);


//     case "INCREASE_QTY":


//     case "DECREASE_QTY":

//     case "RESET_CART":
//       return [];

//     default:
//       return state;
//   }
// };

// export default function App() {
//   const [cart, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <button onClick={() => dispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Apple" , price : 24} })}>
//         Add Apple
//       </button>
//       <button onClick={() => dispatch({ type: "ADD_ITEM", payload: { id: 2, name: "Banana" , price : 76 } })}>
//         Add Banana
//       </button>
//       <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>

//       <h2>Cart Items:</h2>
//       {cart.length === 0 ? <p>No items in cart.</p> : (
//         cart.map((item) => (
//           <div key={item.id}>
//             <p>{item.name} - Quantity: {item.quantity}</p>
//             <button onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}>+</button>
//             <button onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}>-</button>
//             <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import { useEffect, useContext, useCallback, useRef, useMemo } from "react";
import { Context } from './CounterContext';

const App = () => {

  const preVal = useRef("N/A");
  const { count, setCount } = useContext(Context);

  const increment = useCallback(() => {
    setCount(count + 1);
  },[count]);

  useEffect(() => {
    console.log(`Count is changed from ${preVal.current} to ${count}`);
    preVal.current = count;
  }, [count])

  const doubleIncrement = useMemo(()=>{
    return count * 2 ;
  },[count]) ;
  return (


    <>
      <div>Count : {count}</div>
      <div>Previous Count : {preVal.current}</div>
      <div>Double Increment :- {doubleIncrement}</div>
      <button onClick={increment} >Increment</button>
    </>
  )
}

export default App;


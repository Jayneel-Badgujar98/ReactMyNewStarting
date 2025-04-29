// import React from "react";

// const Counter = ( props) => {
//   console.log("Counter Component Rendered");

//   return <h2>I am a Counter Component and this is my prop : {/*{props.count}*/} and This
//   is my message : {props.message}</h2>;
// };

// export default React.memo(Counter); // Use React.memo to memoize the Counter;

// import React, { useState } from "react";
// import Product from "./Product"; // A memoized component

// export default function App() {
//   const [cart, setCart] = useState([]);

//   console.log("App Rendered");

//   const addToCart = useCallback((product) => {
//     setCart([...cart, product]);
//   }, [cart]); // useCallback to memoize the addToCart function
//   // useCallback is used to memoize the function so that 
//   // it doesn't get recreated on every render.

//   return (
//     <div>
//       <h1>Shopping Cart: {cart.length} items</h1>
//       <Product addToCart={addToCart} />
//     </div>
//   );
// }


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ThemeToggler from './components/ThemeToggler'
// import AuthForm from './auth-app/AuthForm'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      {/* <ThemeToggler /> */}
//      <AuthForm />

//     </>
//   )
// }

// export default App

// import { useState } from "react";

// function useSetForm(initValue, type, placeholder) {
//   {

//     const [val, setval] = useState(initValue);

//     const handleChange = (e) => {
//       setval(e.target.value);
//     }
//     return {
//       value: val,
//       onChange: handleChange,
//       type: type,
//       placeholder: placeholder,
//       className: "border p-2 w-[50%] text-red-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
//     }

//   }
// }
// export default function App() {
//   const email = useSetForm("", "email", "This is a test email");
//   return (
//     <input {...email} />

//   )
// }
import React, { useState, Suspense } from 'react'
import DashBoard from './components/DashBoard'

const Settings = React.lazy(() => import('./components/settings'))


const App = () => {
  const [showSettings, setshowSettings] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">React.lazy + Suspense Demo</h1>

      {!showSettings ? (
        <>
          <DashBoard />
          <button
            onClick={() => setshowSettings(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show Settings Page
          </button>
        </>
      ) : (
        // Suspense wraps the lazy component and shows fallback during loading
        <Suspense fallback={<div>Loading settings page...</div>}>
          <Settings />
          <button
            onClick={() => setshowSettings(false)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Back to Dashboard
          </button>
        </Suspense>
      )}
    </div>
  );
}



export default App
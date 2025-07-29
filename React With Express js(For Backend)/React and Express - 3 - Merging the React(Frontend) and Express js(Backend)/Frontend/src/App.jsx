import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from "./components/signup"
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './components/Profile'
import Layout from './layout/SharedLayout'
import SharedLayout from "./layout/SharedLayout";


function App() {

  return (
    <div className="h-screen w-screen ">
      {/* <Signup /> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={<Profile />} /> */}
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> If you want a home page */}
           {/* <Route index element={<h1>Home Page</h1>} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
    
        </Route>
      </Routes>
    </div>
  )
}

export default App

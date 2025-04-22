//App.jsx
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import ProductDetails from "./pages/ProductDetails"
import ContactUs from './pages/ContactUs'
import AuthForm from './pages/AuthForm'
import TodoWithReducer from './pages/TodoWithReducer'
const App = () => {
  return (
    <div className=' bg-gray-100'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Product />} />
        <Route path = "/ProductDetails/:id" element = {<ProductDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AuthForm" element={<AuthForm />} />
        <Route path = "/TodoWithReducer" element = {<TodoWithReducer />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

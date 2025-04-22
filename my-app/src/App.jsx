
// App.jsx
import React from 'react'
import NotFound from '../pages/Not-Found'
import { BrowserRouter as Browserouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Blogdetails from '../pages/Blogdetails'
import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
  <>

    <Browserouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetails' element={<Blogdetails />} />
        <Route path='/blogdetails/:id' element={<Blogdetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </Browserouter>

  </>)

}

export default App
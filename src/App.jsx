import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Nav from './components/navbar';
import Footer from './components/footer';
import Projects from './components/projects';
import './index.css'

const App = () => {
  return (
    <div className='h-screen overflow-y-scroll scrollbar-hide'>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';


function App() {

  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
          
        </div>
      </Router>
      <Footer />
    </>
    
  );
}

export default App;

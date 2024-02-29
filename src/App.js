import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Fashion from './components/Fashion';
import Cricket from './components/Cricket';
import Politics from './components/Politics';
import "./App.css";

function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

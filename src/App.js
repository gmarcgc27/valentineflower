import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Flower from './components/Flower';
import Questions from './components/Questions';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flower/:name" element={<Flower />} />
        <Route path="/questions/:name" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;

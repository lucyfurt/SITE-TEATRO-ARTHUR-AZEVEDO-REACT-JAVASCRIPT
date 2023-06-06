import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Biblioteca from './Pages/Biblioteca';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teatro" element={<Biblioteca />} />
      </Routes>
    </Router>
  );
}

export default App;

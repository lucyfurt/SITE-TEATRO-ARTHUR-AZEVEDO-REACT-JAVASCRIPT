import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Historia from './Pages/Historia';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teatro" element={<Historia />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Historia from './Pages/Historia';
import Programacao from './components/Content/Programacao';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teatro" element={<Historia />} />
        <Route path="/eventos" element={<Programacao />} />
      </Routes>
    </Router>
  );
}

export default App;

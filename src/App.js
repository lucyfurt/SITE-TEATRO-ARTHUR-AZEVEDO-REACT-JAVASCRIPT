import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Historia from './Pages/Historia';
import Programacao from './components/Content/Programacao';
import AllEvents from './Pages/AllEvents'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teatro" element={<Historia />} />       
        <Route path="/allevents" element={<AllEvents />} />
      </Routes>
    </Router>
  );
}

export default App;

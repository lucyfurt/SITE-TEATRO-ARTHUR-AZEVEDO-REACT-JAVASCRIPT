import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Historia from './Pages/Historia';
import AllEvents from './Pages/AllEvents'
import Pautas from './Pages/Pautas';
import Nucleo from './Pages/Nucleo';
import Institucional from './Pages/Institucional';
import Espacos from './Pages/Espacos';
import NewsPage from './Pages/newsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teatro" element={<Historia />} />       
        <Route path="/allevents" element={<AllEvents />} />
        <Route path="/pautas" element={<Pautas />} />
        <Route path="/nmp" element={<Nucleo />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/tecnico" element={<Espacos/>} />
        <Route path="/allNews" element={<NewsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

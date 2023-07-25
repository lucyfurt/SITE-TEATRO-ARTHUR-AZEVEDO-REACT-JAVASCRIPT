import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Historia from './Pages/Historia';
import AllEvents from './Pages/AllEvents'
import Pautas from './Pages/Pautas';
import Nucleo from './Pages/NucleoMemoria';
import Institucional from './Pages/Institucional';
import Espacos from './Pages/InformacaoTecnica';
import NewsPage from './Pages/AllNews';
import FaleConosco from './Pages/FaleConosco';
import FormPauta from './Pages/FormPauta';
import Nae from './Pages/Nae';

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
        <Route path="/faleconosco" element={<FaleConosco/>} />
        <Route path="/inscricoes" element={<FormPauta/>} />
        <Route path="/nae" element={<Nae/>} />  
      </Routes>
    </Router>
  );
}
export default App;
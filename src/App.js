import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Noticia from './pages/noticia.js';
import Busca from './pages/busca.js';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/noticia' element={<Noticia />} />
        <Route path='/busca' element={<Busca />} />
      </Routes>
    </BrowserRouter>
  );
}
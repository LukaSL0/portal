import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Noticia from './pages/noticia.js';

export default function App() {

  

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticia' element={<Noticia />} />
      </Routes>
    </HashRouter>
  );
}


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Noticia from './pages/noticia.js';

export default function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/portal/' element={<Home />} />
        <Route path='/portal/noticia' element={<Noticia />} />
      </Routes>
    </BrowserRouter>
  );
}


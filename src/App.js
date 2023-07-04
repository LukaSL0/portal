import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Noticia from './pages/noticia.js';

export default function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='https://lukasl0.github.io/portal/' element={<Home />} />
        <Route path='https://lukasl0.github.io/portal/noticia/' element={<Noticia />} />
      </Routes>
    </BrowserRouter>
  );
}


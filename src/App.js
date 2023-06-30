import './App.css';
import api from './Api.js';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    api.get('/').then(res=> {
      console.log(res.data);
    })
  }, [])

  return (
    <div className="App">

    </div>
  );
}


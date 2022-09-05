import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route,} from "react-router-dom"; 
import Signup from './pages/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
  </BrowserRouter>
);

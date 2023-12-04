import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './Inicio';
import Projetos from './Projetos';
import Sobre from './Sobre';
import Header from './Header';
import { GlobalStyle } from "../Styles/Global";

function App(){
  return(
    <>
   <GlobalStyle/>
    
    
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Inicio/>}/>     
    <Route path="/projetos" element={<Projetos/>}/> 
    <Route path="/sobre" element={<Sobre/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
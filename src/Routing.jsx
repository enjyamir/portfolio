import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />}/>

        </Routes>
        </BrowserRouter>
     );
}
 
export default Routing;
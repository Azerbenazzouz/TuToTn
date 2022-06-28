import React from 'react'

import Login from '../Components/login/Login';
import Regester from '../Components/Regester/Regester';
import Home from '../Pages/Home';
import Navbar from './../Components/Home/Navbar/Navbar';

import {
    Routes,
    Route,
  } from "react-router-dom";

function WelcomeRoute() {
  return (
    <div>
          <Navbar/>
          <Routes>
              <Route path="*" element={<center><h1>Page not found 404...</h1></center>} />
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/identifier" element={<Login/>} />
              <Route exact path="/Creer" element={<Regester/>} />
          </Routes>
        </div>
  )
}

export default WelcomeRoute
import React from 'react'
import AppHome from '../Components/App/AppHome/AppHome';

import {
    Routes,
    Route,
  } from "react-router-dom";

function AppRoute() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="*" element={<center><h1>Page not found 404...</h1></center>} />
            <Route exact path="/" element={<AppHome/>} />
            <Route exact path="/Home" element={<AppHome/>} />
        </Routes>
    </React.Fragment>
  )
}

export default AppRoute
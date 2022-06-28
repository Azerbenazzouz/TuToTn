import React from 'react'

import EmailVerified from '../Components/App/EmailVerified/EmailVerified';
import AppHome from '../Components/App/AppHome/AppHome';
import Navbar from './../Components/App/NavBar/Navbar';

import { Routes,  Route } from "react-router-dom";

function AppNotVerifEmailRoute() {
    return (
        <React.Fragment>
            <Navbar/>
            <EmailVerified/>
            <Routes>
                <Route path="*" element={<center><h1>Page not found 404...</h1></center>} />
                <Route exact path="/" element={<AppHome/>} />
                <Route exact path="/Home" element={<AppHome/>} />
            </Routes>
        </React.Fragment>
    )
}

export default AppNotVerifEmailRoute

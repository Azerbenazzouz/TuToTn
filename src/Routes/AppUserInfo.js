import React from 'react'
import UserInfoComplite from './../Components/App/UserInfoComplite/UserInfoComplite';

import {
    Routes,
    Route,
  } from "react-router-dom";

function AppUserInfo() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="*" element={<UserInfoComplite/>} />
        </Routes>
    </React.Fragment>
  )
}

export default AppUserInfo
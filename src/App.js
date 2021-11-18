import React from 'react';
import { Routes, Route } from "react-router-dom";
import{ Home } from './Home/Home';
import { Landing } from './Landing/Landing';
import { Profile } from './Profile/Profile';
import {ResetPassword} from './Password/ResetPassword.jsx'
import {ForgotPassword} from './Password/ForgotPassword.jsx'

// PrimeReact Imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Landing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
      </Routes>
    </div>
  )
}

export {App};

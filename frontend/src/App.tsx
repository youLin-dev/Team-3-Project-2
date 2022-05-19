import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
<<<<<<< HEAD
import {LoginPage} from './Components/Login/login2';
import ProfilePage from './Components/Profile/Profile';
=======
import { LoginPage } from './Components/Login/login2';
import { ProfilePage } from './Components/Profile/Profile';
>>>>>>> f46cfc334a24332ee37472b9c07cf7fe23dcbaf5

function App() {
  //+919782795905 (India) Whatdapp
  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/" element={<LoginPage/>}/>
          <Route  path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;

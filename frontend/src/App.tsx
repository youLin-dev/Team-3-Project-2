import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { LoginPage } from './Components/Login/login2';
import {ProfilePage} from './Components/Profile/Profile';
function App() {
  //+919782795905 (India) Whatdap
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

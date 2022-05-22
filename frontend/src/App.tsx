import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { LoginPage } from './Components/Login/login2';
import { DisplayMembers } from './Components/Member/DisplayMembers';
import { Chat } from './Components/Message/Chat';
import {ProfilePage} from './Components/Profile/Profile';
function App() {
  //+919782795905 (India) Whatdap
  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/" element={<LoginPage/>}/>
          <Route  path="/profile" element={<ProfilePage/>}/>
          <Route path="/test" element={<Chat/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;

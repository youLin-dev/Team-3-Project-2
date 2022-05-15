import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/login';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>




    </div>
  );
}

export default App;

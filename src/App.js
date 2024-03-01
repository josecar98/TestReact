// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import {  Routes} from "react-router";
import CardRequestList from './pages/CardRequestList';
import ApprovalScreen from './pages/ApprovalPage';
import RequestedScreen from './pages/RequestedPage';
function App() {
  return (
    <Router>
      <Routes>
      < Route exact path="/" element={<CardRequestList/>} />
      < Route path="/Aprobado" element={<ApprovalScreen/>} />
      < Route path="/Solicitado" element={<RequestedScreen/>} />
      </Routes>
        
    </Router>
  );
}

export default App;

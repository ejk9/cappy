import React, {useState} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

// Landing Page: https://github.com/briancodex/react-website-v1
// https://www.youtube.com/watch?v=I2UBjN5ER4s

export default function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}
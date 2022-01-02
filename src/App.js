import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import UserForm from "./components/pages/UserForm";


export default function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/userform' element={<UserForm/>}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}
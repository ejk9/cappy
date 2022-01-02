import React, {useState} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/LoginForm';
import GUN from 'gun';
import 'gun/sea';
import LoginForm from "./components/pages/LoginForm";
import RegisterForm from "./components/pages/RegisterForm";

// Landing Page: https://github.com/briancodex/react-website-v1
// https://www.youtube.com/watch?v=I2UBjN5ER4s

export default function App() {
  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  var gun = GUN();
  var gunUser = gun.user();
  
  const Login = details => {
    console.log(details);

    gunUser.auth(details.username, details.password, function(ack){
      console.log(ack);
      if(ack.err){
          alert("Error");
      } else {
          alert("Successful")
      }
    });
  }

  const Register = details => {
    console.log(details);

    gunUser.create(details.username, details.password, function(ack){
      console.log(ack);
      if(ack.err){
          alert("Error");
      } else {
          alert("Successful")
      }
    });
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className='App'>
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            {(user.username != "") ? (
              <div className="welcome">
                <h2>Welcome, <span>{user.username}</span></h2>
              </div>
            ) : (
              <Route path='/login' element={<LoginForm Login={Login} error={error}/>}/>
            )}
            <Route path='/register' element={<RegisterForm Register={Register} error={error}/>}/>
          </Routes>
        </Router>
        
      </>
    </div>
  );
}
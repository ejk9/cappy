import React, {useState} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
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
    gunUser.auth(details.username, details.password, function(ack){
      if(ack.err){
        setError("Wrong user or password");
      } else {
        console.log("Success");
        setError("");
        <Route path="*" element={<Home/>}/>
      }
    });
  }

  const Register = details => {
    console.log(details);

    var allow = true;
    var temp = details.password.length;

    if (!details.username.trim()) {
      setError('Username required');
      allow = false;
    }
  
    if (!details.password) {
      setError('Password is required');
      allow = false;
    } else if (details.password.length <= 8) {
      setError('Password needs to be at least 8 characters');
      allow = false;
    }
  
    if (!details.password2) {
      setError('Password is required');
      allow = false;
    } else if (details.password2 !== details.password) {
      setError('Passwords do not match');
      allow = false;
    }
    
    var temp = "~@";
    temp += details.username;

    gun.get(temp).once(function(ack){ 
      if(ack == null && allow){
        gunUser.create(details.username, details.password, function(ack){
          setError("");
          details.username = "";
          details.password = "";
          details.password2 = "";
          alert("Success");
        });
      }else{
        if (ack != null) {
          setError("Username already exists!");
        }

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
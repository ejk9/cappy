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

    gunUser.create(details.username, details.password, function(ack){
      var allow = false;
      var temp = details.password.length;
    
      if(temp < 8){
        setError("Password not long enough");
        allow = false;
      } else { 
        allow = true;
      }

      if (details.password != details.password2) {
        setError("Passwords do not match");
        allow = false;
      } else {
        allow = true;
      }

      if(details.username.length < 3){
        setError("Username not long enough");
        allow = false;
      } else {
        allow = true;
      }
      
      var temp = "~@";
      temp += details.username;

      if(gun.get(temp).once && !allow){
        setError("Username already exists!");
      } else {
        gunUser.create(details.username, details.password);
        console.log("Success");
      }

      // gun.get(temp).once(function(ack){ 
      //   if(ack == null && allow){
      //     user.create(details.username, details.password, function(ack){
      //     });
      //   }else{
      //     if (ack.err){
      //       setError("Username Required");
      //     } else {
      //       setError("Username already exists!");
      //       details.username = "";
      //       details.password = "";
      //       details.password2 = "";
      //     }
      //   }
      // })
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